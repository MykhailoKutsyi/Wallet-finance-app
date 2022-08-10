import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/session/session-operations';
import { ToastContainer } from 'react-toastify';

import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import CustomRoute from 'components/CustomRoute/CustomRoute';

const Login = lazy(() => import('pages/Auth/LoginPage/LoginPage'));
const Register = lazy(() => import('pages/Auth/RegisterPage/RegisterPage'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));
const Statistics = lazy(() => import('pages/Statistics/Statistics'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Routes>
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppBar />
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="diagram"
            element={
              <ProtectedRoute>
                <AppBar />
                <Statistics />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<CustomRoute />} />
        </Routes>

        <ToastContainer />
        <Footer />
      </Container>
    </Suspense>
  );
}
