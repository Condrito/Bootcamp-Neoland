import { useEffect, useState } from 'react';

const useRandomData = ({ datos }) => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    setRandomData(
      datos.sort(function () {
        return Math.random() - 0.5;
      }),
    );
  }, [datos]);

  return randomData;
};

export default useRandomData;
