import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json, text/plain, */*',
  'cache-control': 'no-cache',
  Channel: 'web',
  'Content-Type': 'application/json',
  Locale: 'it',
  pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Accept, Accept-Language, Content-Language, Content-Type',
};
const defaultBody = {};

// Axios configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    common: { ...defaultHeaders },
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(config => config, error => error);
// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
  // Do something with response data
  if (process.env.REACT_APP_ISMOCK === 'true') {
    response.statusText = 'ok';
    window.sessionStorage.setItem('postObject', JSON.stringify({
      token: `8tsaboi7tsadg-sapd79uiaosd86oAD-ASDOIHai7sdUAIKLKLLo8sd7fula`,
    }));
  }
  return response;
}, error => error.response);
export {
  defaultHeaders,
  defaultBody,
  axiosInstance,
};
