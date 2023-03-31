import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './components/Context/UserContest';
import Protected from './components/Protected';
import Deportes from './Pages/Deportes';
import Economia from './Pages/Economia';
import Home from './Pages/Home';
import NoticiaDetalle from './Pages/NoticiaDetalle';
import Noticias from './Pages/Noticias';
import Page404 from './Pages/Page404';
import Tecnologia from './Pages/Tecnologia';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/Noticias"
              element={
                <Protected>
                  <Noticias />
                </Protected>
              }
            />
            <Route
              path="/Noticias/:id"
              element={
                <Protected>
                  <NoticiaDetalle />
                </Protected>
              }
            />
            <Route
              path="/Economía/:id"
              element={
                <Protected>
                  <NoticiaDetalle />
                </Protected>
              }
            />
            <Route
              path="/Tecnología/:id"
              element={
                <Protected>
                  <NoticiaDetalle />
                </Protected>
              }
            />
            <Route
              path="/Deportes/:id"
              element={
                <Protected>
                  <NoticiaDetalle />
                </Protected>
              }
            />
            <Route
              path="/Economía"
              element={
                <Protected>
                  <Economia />
                </Protected>
              }
            />
            <Route
              path="/Tecnología"
              element={
                <Protected>
                  <Tecnologia />
                </Protected>
              }
            />
            <Route
              path="/Deportes"
              element={
                <Protected>
                  <Deportes />
                </Protected>
              }
            />

            <Route path="/Deportes/*" element={<Page404 />} />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
