import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { UrlRoutes } from '../enumerators/urlRoutes.enum';
import RegisterPage from '../pages/register-page/RegisterPage';
import UserProtectedRoute from './UserProtectedRoute';
import SecretProtectedRoute from './SecretProtectedRoute';
import EndPage from '../pages/end-page/EndPage';
import EndingProtectedRoute from './EndingProtectedRoute';

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
          <Route path={UrlRoutes.access} element={<RegisterPage />} />
          
          <Route element={<UserProtectedRoute />}>
            <Route path={UrlRoutes.welcome} element={<WelcomePage />} />
            <Route path={UrlRoutes.secrets}>
              <Route
                path={UrlRoutes.secretFire}
                element={
                  <SecretProtectedRoute type="fire">
                    <FireSecret />
                  </SecretProtectedRoute>
                }
              />
              <Route
                path={UrlRoutes.secretWater}
                element={
                  <SecretProtectedRoute type="water">
                    <WaterSecret />
                  </SecretProtectedRoute>
                }
              />
              <Route
                path={UrlRoutes.secretLeaf}
                element={
                  <SecretProtectedRoute type="leaf">
                    <LeafSecret />
                  </SecretProtectedRoute>
                }
              />
              <Route index element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
              <Route path="*" element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
            </Route>
            <Route path={UrlRoutes.poke} element={<PokePage />} >
              <Route index element={<Navigate to={UrlRoutes.home} replace/>} />
              <Route path={UrlRoutes.home} element={<HomePage />} />
              <Route path={UrlRoutes.selectPokemon} element={<SelectPokePage />} />
            </Route>
              
            <Route element={<EndingProtectedRoute />}>
              <Route path={UrlRoutes.end} element={<EndPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
