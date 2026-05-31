import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, collection, onSnapshot, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

type Registration = {
  id: string;
  name: string;
  address: string;
  birthDate: string;
  parentName: string;
  parentPhone: string;
  reportCardFile: string;
  familyCardFile: string;
  birthCertificateFile: string;
  submittedAt: string;
};

type InformationItem = {
  id: string;
  title: string;
  content: string;
  date: string;
};

type SiteConfig = {
  schoolName: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  ppdbTitle: string;
  ppdbDescription: string;
  ppdbBrochureUrl: string;
  copyrightText: string;
};

type SiteContent = SiteConfig & {
  registrations: Registration[];
  informationItems: InformationItem[];
};

const defaultSiteConfig: SiteConfig = {
  schoolName: 'SMANTARA',
  heroTitle: 'Unggul dalam Prestasi,\nBerkarakter dalam Budaya',
  heroSubtitle: 'Selamat Datang di SMAN 2 Depok',
  aboutTitle: 'Membentuk Generasi Emas Indonesia',
  aboutDescription: 'Berdiri sejak tahun 1990, SMAN 2 Depok telah menjadi salah satu institusi pendidikan menengah atas percontohan di Jawa Barat. Kami berdedikasi untuk menciptakan lingkungan belajar yang kompetitif namun tetap mengedepankan nilai-nilai budi pekerti luhur masyarakat berbudaya.',
  contactAddress: 'Jl. Gede, Abadijaya, Depok',
  contactPhone: '(021) 7782 5431',
  contactEmail: 'info@sman2depok.sch.id',
  ppdbTitle: 'Penerimaan Peserta Didik Baru 2026/2027',
  ppdbDescription: 'Mari bergabung menjadi bagian dari keluarga besar SMAN 2 Depok. Daftarkan diri Anda segera dan jadilah generasi unggul masa depan.',
  ppdbBrochureUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
  copyrightText: '© 2026 SMANTARA',
};

type SiteContextType = {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteConfig>) => Promise<void>;
  addRegistration: (reg: Omit<Registration, 'id'>) => Promise<void>;
  addInformationItem: (item: Omit<InformationItem, 'id'>) => Promise<void>;
  deleteInformationItem: (id: string) => Promise<void>;
  isAuthenticated: boolean;
  login: (username?: string, password?: string) => Promise<void>;
  logout: () => Promise<void>;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map((provider: any) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [informationItems, setInformationItems] = useState<InformationItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const isLocalAdmin = localStorage.getItem('admin_auth') === 'true';
    setIsAuthenticated(isLocalAdmin);

    const unsub = onAuthStateChanged(auth, (user) => {
      if (!isLocalAdmin && user) {
        setIsAuthenticated(true);
      }
    });
    return () => unsub();
  }, []);

  // Listen to site config
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'site', 'config'), (docSnap) => {
      if (docSnap.exists()) {
        setSiteConfig(docSnap.data() as SiteConfig);
      } else {
        // Init config if missing but only if authenticated
        setSiteConfig(defaultSiteConfig);
        if (auth.currentUser) {
          setDoc(doc(db, 'site', 'config'), defaultSiteConfig).catch(e => console.warn('Could not init config', e));
        }
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'site/config');
    });
    return () => unsub();
  }, []);

  // Listen to information items (public)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'informationItems'), (snapshot) => {
      const items: InformationItem[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() } as InformationItem));
      // sort by date desc
      items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setInformationItems(items);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'informationItems');
    });
    return () => unsub();
  }, []);

  // Listen to registrations (admin only)
  useEffect(() => {
    if (!isAuthenticated) {
      setRegistrations([]);
      return;
    }
    const unsub = onSnapshot(collection(db, 'registrations'), (snapshot) => {
      const regs: Registration[] = [];
      snapshot.forEach((d) => regs.push({ id: d.id, ...d.data() } as Registration));
      // sort by submitted desc
      regs.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
      setRegistrations(regs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'registrations');
    });
    return () => unsub();
  }, [isAuthenticated]);

  const updateContent = async (newContent: Partial<SiteConfig>) => {
    try {
      await updateDoc(doc(db, 'site', 'config'), newContent);
    } catch (e) {
      // fallback to setDoc if update fails due to not existing
      await setDoc(doc(db, 'site', 'config'), { ...siteConfig, ...newContent }, { merge: true });
    }
  };

  const addRegistration = async (reg: Omit<Registration, 'id'>) => {
    try {
      await addDoc(collection(db, 'registrations'), reg);
    } catch (e) {
      handleFirestoreError(e, OperationType.CREATE, 'registrations');
    }
  };

  const addInformationItem = async (item: Omit<InformationItem, 'id'>) => {
    try {
      await addDoc(collection(db, 'informationItems'), item);
    } catch (e) {
      handleFirestoreError(e, OperationType.CREATE, 'informationItems');
    }
  };

  const deleteInformationItem = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'informationItems', id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, `informationItems/${id}`);
    }
  };

  const login = async (username?: string, password?: string) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      
      // Try optional anonymous to keep firebase partially happy if we wanted
      try {
        const { signInAnonymously } = await import('firebase/auth');
        await signInAnonymously(auth);
      } catch (e) {
        console.warn("Could not sign in anonymously, continuing with local auth");
      }
    } else {
      throw new Error('Username atau password salah.');
    }
  };

  const logout = async () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    try {
      await signOut(auth);
    } catch (e) {}
  };

  const content: SiteContent = {
    ...siteConfig,
    registrations,
    informationItems,
  };

  return (
    <SiteContext.Provider value={{ content, updateContent, addRegistration, addInformationItem, deleteInformationItem, isAuthenticated, login, logout }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}
