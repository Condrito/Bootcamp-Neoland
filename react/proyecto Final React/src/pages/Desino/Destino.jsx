import { useContext } from 'react';

import CitiesGalery from '../../components/CitiesGalery/CitiesGalery';
import { TourDataContext } from '../../components/Context/TourDataContest';
import CountriesGalery from '../../components/CountriesGalery/CountriesGalery';

const Destino = () => {
  const { tourData } = useContext(TourDataContext);

  const { countryCode } = tourData;

  return (
    <>
      <div>Destino</div>
      {countryCode == null ? <CountriesGalery /> : <CitiesGalery />}
    </>
  );
};

export default Destino;
