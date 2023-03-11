import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Loader from "shared/components/Loader/Loader";

import PrivateRoute from "modules/PrivateRoute/PrivateRoute";
import PublicRoute from "modules/PublicRoute/PublicRoute";

const RegistrationPage = lazy(()=> import('pages/RegistrationPage/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<RegistrationPage />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
