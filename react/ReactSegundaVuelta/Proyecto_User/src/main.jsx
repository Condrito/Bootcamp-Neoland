import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import { UserContextProvider } from './context/userContext';
import {
  CheckCode,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  Page404NotFound,
  Register,
} from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyCode" element={<CheckCode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/*" element={<Page404NotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  </BrowserRouter>,
);
