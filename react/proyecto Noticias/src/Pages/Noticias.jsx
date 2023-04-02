import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import Galeria from '../components/Galeria/Galeria';

const Noticias = () => {
  const buscador = useRef(null);
  const [buscar, setBuscar] = useState(null);
  const [requestNoticias] = useOutletContext();

  const noticiaBuscada = requestNoticias?.filter((noticia) =>
    noticia.title.includes(buscar),
  );

  console.log(noticiaBuscada);

  return (
    <>
      <div className="buscador">
        <label>
          <input type="text" ref={buscador} />
        </label>
        <Button
          variant="contained"
          fontSize="small"
          onClick={() => setBuscar(buscador.current.value)}
        >
          <SearchIcon />
        </Button>
      </div>
      <div className="noticias">
        {noticiaBuscada.length != 0 ? (
          <Galeria datos={noticiaBuscada} ambito={'Noticias'} />
        ) : (
          <Galeria datos={requestNoticias} ambito={'Noticias'} />
        )}
      </div>
    </>
  );
};

export default Noticias;
