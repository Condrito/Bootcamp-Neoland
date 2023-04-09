import './photoCity.css';

import React, { useEffect, useState } from 'react';

import { getPhoto } from '../../services/photos';

const PhotoCity = ({ city }) => {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    (async () => {
      setPhoto(await getPhoto(city));
    })();
  }, []);

  return (
    <>
      {photo.photos?.length == 0 && (
        <img
          className="imgCity"
          src="https://atuk.com.ec/wp-content/uploads/2021/04/ciudad-compacta-ciudad-difusa-blog-de-ATUK-1170x725.jpg"
          alt="ciudad generica"
        />
      )}
      {photo.photos?.map((image) => {
        return (
          photo.photos.length > 0 && (
            <div key={image.alt}>
              <img className="imgCity" src={image.src.original} alt={image.alt} />
            </div>
          )
        );
      })}
    </>
  );
};

export default PhotoCity;
