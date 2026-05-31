# Firebase Security Spec

## Data Invariants
- SiteConfig (`site/config`): Can be read by anyone, but updated only by authenticated users (admins).
- Registration (`registrations/{id}`): Can be read only by authenticated users. Can be created by ANYONE (it's a public registration form).
- InformationItem (`informationItems/{id}`): Can be read by anyone. Can be created/updated/deleted only by authenticated users.

## "Dirty Dozen" Payloads
Payloads checking for:
- Unauthenticated write to `site/config` -> FAIL
- Invalid type to `site/config` -> FAIL
- Unauthenticated read of `registrations` -> FAIL
- Missing fields in `Registration` create -> FAIL
- Unauthenticated delete of `informationItems` -> FAIL

## Test Runner
The test runner will ensure these rules hold.
