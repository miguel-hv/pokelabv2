import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';

const WelcomePage = lazy(() => import('../pages/welcome-page/WelcomePage'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<Navigate to={UrlRoutes.poke} />} /> */}
        <Route path="/" element={<Navigate to={UrlRoutes.welcome} />} />
        
          <Route path={UrlRoutes.welcome} element={<WelcomePage />} />

        {/* <Route path="*" element={<Navigate to={UrlRoutes.poke} />} /> */}
        <Route path="*" element={<Navigate to={UrlRoutes.welcome} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
