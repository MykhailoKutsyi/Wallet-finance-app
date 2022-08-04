import React, { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, NavLink } from 'react-router-dom';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const Login = lazy(() => import('./pages/Auth/LoginPage/LoginPage'));
const Register = lazy(() => import('./pages/Auth/RegisterPage/RegisterPage'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Statistics = lazy(() => import('./pages/Statistics/Statistics'));

export default function App() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={'Loading bitch...'}> */}
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppBar />

                <NavLink to="/register">| REGISTER |</NavLink>
                <NavLink to="/login">| LOGIN |</NavLink>
                <NavLink to="/home">| HOME |</NavLink>
                <NavLink to="/diagram">| DIAGRAM |</NavLink>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <NavLink to="/register">| REGISTER |</NavLink>
                <NavLink to="/login">| LOGIN |</NavLink>
                <NavLink to="/home">| HOME |</NavLink>
                <NavLink to="/diagram">| DIAGRAM |</NavLink>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <NavLink to="/register">| REGISTER |</NavLink>
                <NavLink to="/login">| LOGIN |</NavLink>
                <NavLink to="/home">| HOME |</NavLink>
                <NavLink to="/diagram">| DIAGRAM |</NavLink>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="diagram"
            element={
              <ProtectedRoute restricted>
                <AppBar />

                <NavLink to="/register">| REGISTER |</NavLink>
                <NavLink to="/login">| LOGIN |</NavLink>
                <NavLink to="/home">| HOME |</NavLink>
                <NavLink to="/diagram">| DIAGRAM |</NavLink>
                <Statistics />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}
