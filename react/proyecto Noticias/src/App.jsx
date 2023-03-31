import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import useRequest from './Hooks/useRequest';

const App = () => {
  const urlNoticiasApi = import.meta.env.VITE_APP_NOTICIAS;
  const requestNoticias = useRequest(urlNoticiasApi);
  return (
    <div className="App">
      <Nav />
      <Outlet context={[requestNoticias]} />
      <Footer />
    </div>
  );
};

export default App;
