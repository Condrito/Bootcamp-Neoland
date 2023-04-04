import './App.css';

import { Outlet } from 'react-router-dom';

import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;