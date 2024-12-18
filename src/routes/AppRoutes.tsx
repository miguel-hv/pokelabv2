import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import PokePage from '../pages/poke-page/PokePage';
import HomePage from '../pages/home-page/HomePage';
import SelectPokePage from '../pages/select-poke-page/SelectPokePage';

const WelcomePage = lazy(() => import('../pages/welcome-page/WelcomePage'));


const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={UrlRoutes.poke} replace/>} />
          <Route path={UrlRoutes.welcome} element={<WelcomePage />} />
          <Route path={UrlRoutes.poke} element={<PokePage />} >
            <Route index element={<Navigate to={UrlRoutes.home} replace/>} />
            <Route path={UrlRoutes.home.replace(`${UrlRoutes.poke}/`, '')} element={<HomePage />} />
            <Route path={UrlRoutes.selectPokemon.replace(`${UrlRoutes.poke}/`, '')} element={<SelectPokePage />} />
          </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
