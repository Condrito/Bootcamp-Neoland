import React, { useContext, useEffect, useState } from 'react';

import { TourDataContext } from '../../components/Context/TourDataContest';
import { getCityHotel } from '../../services/hotels';

const CiudadDetalle = () => {
  const { tourData, setTourData } = useContext(TourDataContext);
  const { cityName, regionId } = tourData;
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    async () => {
      setRegionData(await getCityHotel(cityName));
    };
  }, []);

  return (
    <>
      <div>{cityName}</div>
    </>
  );
};

export default CiudadDetalle;

//setToua({ ...tourData, regionId: regionData.data[0].gaiaId });
/*
renionData?.data.map((regionTypeData, index) => {
  if (index == 0) setTourData({ ...tourData, regionId: regionTypeData.gaiaId });
});
*/
