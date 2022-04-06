import { axiosInstance as axios } from '../utils/index';
import { handlingResponse } from '../utils/globalMethods';
import { defaultHeaders } from '../utils/index';

export const actorData = async (params) => {
  let data;
  const url = 'http://localhost:8099/movies/'+params.id+'/actors/';

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

export default actorData;
