import { axiosInstance as axios } from '../utils/index';
import { handlingResponse } from '../utils/globalMethods';
import { defaultHeaders } from '../utils/index';

export const deleteMovie = async (params) => {

    axios.delete('http://localhost:8099/movies/' + params)
        .then(() => console.log("success"));
};

export default deleteMovie;
