import { axiosInstance as axios } from '../utils/index';
import { handlingResponse } from '../utils/globalMethods';
import { defaultHeaders } from '../utils/index';

export const getActors = async (params) => {
  let data;
  try {
    data = await axios({
      method: 'get',
      url: `http://localhost:8099/movies/` + params + '/actors',
      headers: { ...defaultHeaders },
    });
    return handlingResponse(data);
  } catch (error) {
    return handlingResponse(error);
  }
};

export default getActors;
