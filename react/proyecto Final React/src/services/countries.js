import useAxios from '../CustomHooks/useAixos';

export const getCountries = async () => {
  const options = {
    method: 'GET',
    url: 'https://rest-country-api.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'e289501b28msh1cb21ec14cb923cp1d195bjsn355e624cb065',
      'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
