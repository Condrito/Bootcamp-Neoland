import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../utils/loginLocalStorage';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <button
        className="btn"
        type="submit"
        style={{ background: '#007DBC;' }}
        onClick={logout}
      >
        <Link to="/">Logout</Link>
      </button>
    </>
  );
};

export default Home;
