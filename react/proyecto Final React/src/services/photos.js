import useAxios from '../CustomHooks/useAixos';

export const getPhoto = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://api.pexels.com/v1/search',
    params: { query, per_page: 1 },
    headers: {
      authorization: '603H6OtUGYR3l0IkkCT8IMn3jbdCo5oI5ORAsqXWKaFll2BDyO62Tz4q',
    },
  };
  return await useAxios(options);
};
