import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';
// import Loader from './components/Loader/Loader';

// const ProtectedRoute = lazy(() =>
//   import('./components/ProtectedRoute/ProtectedRoute')
// );
// const PublicRoute = lazy(() => import('./components/PublicRoute/PublicRoute'));

const Login = lazy(() => import('./pages/Auth/LoginPage/LoginPage'));
const Register = lazy(() => import('./pages/Auth/RegisterPage/RegisterPage'));

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));

export default function App() {
  return (
    <Container>
      {/* <AppBar /> */}
      {/* // <Suspense fallback={<Loader />}> */}
      <Suspense fallback={'Loading bitch...'}>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          />

          <Route
            path="register"
            element={
              // <PublicRoute restricted>
              <Register />
              // </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              // <PublicRoute restricted>
              <Login />
              // </PublicRoute>
            }
          />

          <Route
            path="statistics"
            element={
              // <ProtectedRoute restricted>
              <Statistics />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
}
