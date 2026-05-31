import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import News from '../components/News';
import Contact from '../components/Contact';
import FloatingInfo from '../components/FloatingInfo';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <News />
        <Contact />
      </main>
      <FloatingInfo />
    </div>
  );
}
