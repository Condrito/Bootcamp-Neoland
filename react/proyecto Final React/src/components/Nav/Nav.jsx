import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../Context/UserContest';
const Nav = () => {
  const { logOut, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      {user && (
        <nav>
          <ul>
            <li>
              <NavLink to="/Destino">Destino</NavLink>
            </li>
            <li>
              <NavLink to="/Vuelos">Vuelos</NavLink>
            </li>
            <li>
              <NavLink to="/Hoteles">Hoteles</NavLink>
            </li>
            <li>
              <NavLink to="/Favoritos">Favoritos</NavLink>
            </li>

            <li className="logout">
              <button onClick={() => handleClickLogOut()}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
