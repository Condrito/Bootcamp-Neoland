import React, { useState } from 'react';
import { createContext } from 'react';

export const TourDataContext = createContext();

export const TourDataContextProvider = ({ children }) => {
  const [tourData, setTourData] = useState({
    countryCode: null,
    population: null,
    cityName: null,
    regionId: null,
  });
  return (
    <TourDataContext.Provider value={{ tourData, setTourData }}>
      {children}
    </TourDataContext.Provider>
  );
};
