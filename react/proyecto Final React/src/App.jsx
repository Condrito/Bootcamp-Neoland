import './App.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav/Nav';

const App = () => {
  const [hotelsList, setHotelsList] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Outlet context={[hotelsList, setHotelsList]} />
    </div>
  );
};

export default App;
