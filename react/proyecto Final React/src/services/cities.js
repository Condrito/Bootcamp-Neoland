import useAxios from '../CustomHooks/useAixos';

export const getCities = async (countryCode, populationMin) => {
  const options = {
    method: 'GET',
    url: `https://world-geo-data.p.rapidapi.com/countries/${countryCode}/cities`,
    params: { per_page: '10', min_population: populationMin },
    headers: {
      'X-RapidAPI-Key': 'e289501b28msh1cb21ec14cb923cp1d195bjsn355e624cb065',
      'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
