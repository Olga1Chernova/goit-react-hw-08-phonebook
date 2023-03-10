import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Loader from "shared/components/Loader/Loader";

const RegistrationPage = lazy(()=> import('pages/RegistrationPage/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<RegistrationPage />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
