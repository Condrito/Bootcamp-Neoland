import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import Noticia from '../components/Noticia/Noticia';

const NoticiaDetalle = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(id);
  const [requestNoticias] = useOutletContext();
  const pageString = page.toString();
  const filterData = requestNoticias?.filter((noticia) => noticia.id === pageString);

  //increase counter
  const increase = () => {
    counter < requestNoticias.length - 1
      ? setCounter((count) => count + 1)
      : setCounter(0);
  };

  //decrease counter
  const decrease = () => {
    counter > 0
      ? setCounter((count) => count - 1)
      : setCounter(requestNoticias.length - 1);
  };
  useEffect(() => {
    setPage(Math.floor(id) + counter);
  }, [counter]);

  console.log(page);

  return (
    <div className="noticiaContainer">
      <Button
        className="control__btn"
        variant="outlined"
        sx={{
          height: 900,
          width: 8,
          backgroundColor: 'rgb(25,118,211)',
          '&:hover': {
            backgroundColor: 'navy',
            color: 'white',
          },
        }}
        onClick={decrease}
      >
        <ArrowCircleLeftIcon
          sx={{
            height: 50,
            width: 50,
            color: 'white',
            '&:hover': {
              backgroundColor: 'navy',
              color: 'white',
            },
          }}
        />
      </Button>
      <Noticia key={filterData[0].id} data={filterData[0]} />

      <Button
        className="control__btn"
        variant="outlined"
        sx={{
          height: 900,
          width: 8,
          backgroundColor: 'rgb(25,118,211)',
          '&:hover': {
            backgroundColor: 'navy',
            color: 'white',
          },
        }}
        onClick={increase}
      >
        <ArrowCircleRightIcon
          sx={{
            height: 50,
            width: 50,
            color: 'white',
            '&:hover': {
              backgroundColor: 'navy',
              color: 'white',
            },
          }}
        />
      </Button>
    </div>
  );
};

export default NoticiaDetalle;
