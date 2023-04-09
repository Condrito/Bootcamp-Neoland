import useAxios from '../CustomHooks/useAixos';

//endpoint=>RegionSearch--> te busca el codigo de la ciudad a partir del numbre de la ciudad

export const getCityHotel = async (city) => {
  const options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v2/regions',
    params: { locale: 'es_ES', query: `'${city}'`, domain: 'ES' },
    headers: {
      'X-RapidAPI-Key': 'e289501b28msh1cb21ec14cb923cp1d195bjsn355e624cb065',
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};

//endpoint=>hotelSearch --> te devuelve una listade hoteles ordenados por precio para una ciudad determinada, partiendo de la regionID y de la fecha de entrada y salida
export const getHotel = async (regionCode) => {
  const options = {
    method: 'GET',
    url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
    params: {
      domain: 'ES',
      sort_order: 'PRICE_LOW_TO_HIGH',
      locale: 'es_ES',
      checkout_date: '2023-09-27',
      region_id: regionCode,
      adults_number: '1',
      checkin_date: '2023-09-26',
      available_filter: 'SHOW_AVAILABLE_ONLY',
      meal_plan: 'FREE_BREAKFAST',
      guest_rating_min: '8',
      price_min: '10',
      page_number: '1',
      children_ages: '4,0,15',
      amenities: 'WIFI,PARKING',
      price_max: '500',
      lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
      payment_type: 'PAY_LATER,FREE_CANCELLATION',
      star_rating_ids: '3,4,5',
    },
    headers: {
      'X-RapidAPI-Key': 'e289501b28msh1cb21ec14cb923cp1d195bjsn355e624cb065',
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
