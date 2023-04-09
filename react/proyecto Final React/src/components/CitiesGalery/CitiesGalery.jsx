import './citiesGalery.css';

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCities } from '../../services/cities';
import { TourDataContext } from '../Context/TourDataContest';
import PhotoCity from '../PhotoCity/PhotoCity';
import { getCityHotel } from '../../services/hotels';

const CitiesGalery = () => {
  const [cities, setCities] = useState({});
  const { tourData, setTourData } = useContext(TourDataContext);
  const { population, countryCode, cityName, regionId } = tourData;

  useEffect(() => {
    (async () => {
      const populationMin = Math.round(population / 170);
      setCities(await getCities(countryCode, populationMin));
    })();
  }, []);

  console.log(cities);
  return (
    <>
      <div>CitiesGalery</div>
      <ul className="citiesContent">
        {cities.cities?.map((city) => {
          return (
            <li key={city.geonameid}>
              <Link to={`/Destino/${city.name}`}>
                <button onClick={() => setTourData({ ...tourData, cityName: city.name })}>
                  <PhotoCity city={city.name} />
                </button>
              </Link>
              <p>{city.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CitiesGalery;
