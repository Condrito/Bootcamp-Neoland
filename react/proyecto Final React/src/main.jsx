import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './components/Context/UserContest';
import ProtectedRoute from './components/ProtectedRoute';
import CiudadDetalle from './pages/CiudadDetalle/CiudadDetalle';
import Destino from './pages/Desino/Destino';
import Favoritos from './pages/Favoritos/Favoritos';
import Hoteles from './pages/Hoteles/Hoteles';
import LoginPage from './pages/LoginPage/LoginPage';
import Page404 from './pages/Page404/Page404';
import Vuelos from './pages/Vuelos/Vuelos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LoginPage />} />
            <Route
              path="/Destino"
              element={
                <ProtectedRoute>
                  <Destino />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Destino/:id"
              element={
                <ProtectedRoute>
                  <CiudadDetalle />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Vuelos"
              element={
                <ProtectedRoute>
                  <Vuelos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Hoteles"
              element={
                <ProtectedRoute>
                  <Hoteles />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Favoritos"
              element={
                <ProtectedRoute>
                  <Favoritos />
                </ProtectedRoute>
              }
            />

            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
