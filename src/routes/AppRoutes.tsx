import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';

const WelcomePage = lazy(() => import('../pages/welcome-page/WelcomePage'));
const PokePage = lazy(() => import('../pages/poke-page/PokePage'));
const HomePage = lazy(() => import('../pages/home-page/HomePage'));
const SelectPokePage = lazy(() => import('../pages/select-poke-page/SelectPokePage'));
const FireSecret = lazy(() => import('../pages/secret-page/FireSecretPage'));
const WaterSecret = lazy(() => import('../pages/secret-page/WaterSecretPage'));
const LeafSecret = lazy(() => import('../pages/secret-page/LeafSecretPage'));



const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={"poke"} replace/>} />

          <Route path={UrlRoutes.welcome} element={<WelcomePage />} />
          <Route path={UrlRoutes.secrets}>
              <Route path={UrlRoutes.secretFire} element={<FireSecret />} />
              <Route path={UrlRoutes.secretWater} element={<WaterSecret />} />
              <Route path={UrlRoutes.secretLeaf} element={<LeafSecret />} />
              <Route index element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
              <Route path="*" element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
          </Route>
          <Route path={UrlRoutes.poke} element={<PokePage />} >
            <Route index element={<Navigate to={UrlRoutes.home} replace/>} />
            <Route path={UrlRoutes.home} element={<HomePage />} />
            <Route path={UrlRoutes.selectPokemon} element={<SelectPokePage />} />
            
          </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
