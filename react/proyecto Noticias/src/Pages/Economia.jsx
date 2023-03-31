import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Galeria from '../components/Galeria/Galeria';

const Economia = () => {
  const [requestNoticias] = useOutletContext();
  let data = requestNoticias;
  return (
    <div className="economia">
      <Galeria ambito="Economía" datos={data} />
    </div>
  );
};

export default Economia;
