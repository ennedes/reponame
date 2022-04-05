import { axiosInstance as axios } from '@api';
import { handlingResponse } from '@utils/globalMethods';
import { defaultHeaders } from '../index';

export const movieData = async (params) => {
  let data;
  const url = 'http://smartpay-02.nets.local:8080/api/login';

  defaultHeaders['Content-Type'] = 'application/json';

  try {
    const options = { headers: { 'Content-Type': 'application/json' } };
    data = await axios.post(url, params, options);
    console.log(data);
    return handlingResponse(data);
  } catch (error) {
    console.log(error);
    return handlingResponse(error);
  }
};

export default movieData;
