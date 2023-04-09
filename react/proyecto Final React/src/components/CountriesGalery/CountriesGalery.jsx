import './countriesGalery.css';

import React, { useContext, useEffect, useState } from 'react';

import { getCountries } from '../../services/countries';
import { TourDataContext } from '../Context/TourDataContest';

const CountriesGalery = () => {
  const [countries, setCountries] = useState([]);

  const { tourData, setTourData } = useContext(TourDataContext);
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);
  console.log(tourData);

  const countriesSorted = countries.sort((a, b) => b.population - a.population);
  return (
    <ul className="countries">
      {countriesSorted?.map((country) => {
        return (
          <li key={country.cca2}>
            <p>{country.name.common}</p>
            <p>{country.cca2}</p>
            <button
              onClick={() =>
                setTourData({
                  ...tourData,
                  countryCode: country.cca2,
                  population: country.population,
                })
              }
            >
              <img src={country.flags[1]} alt={country.name.common} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CountriesGalery;
