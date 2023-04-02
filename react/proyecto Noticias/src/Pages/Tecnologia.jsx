import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Galeria from '../components/Galeria/Galeria';

const Tecnologia = () => {
  const [requestNoticias] = useOutletContext();
  let data = requestNoticias;
  return (
    <div className="tecnologia">
      <Galeria ambito="Tecnología" datos={data} />
    </div>
  );
};

export default Tecnologia;
