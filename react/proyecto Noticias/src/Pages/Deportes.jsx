import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Galeria from '../components/Galeria/Galeria';

const Deportes = () => {
  const [requestNoticias] = useOutletContext();
  const data = requestNoticias;
  return (
    <div className="deportes">
      <Galeria ambito="Deportes" datos={data} />
    </div>
  );
};

export default Deportes;
