// import * as faceapi from 'face-api.js';

// await faceapi.nets.ssdMobilenetv1.loadFromUri('./models');

/** @function
 * * Handling the API Rest resposnse, and return data and different message for status code
 * @name handlingResponse
 * @param {object} data - The response of method
 * @return {object} - The response of method, with additional info
 */
export const handlingResponse = (data) => {
  const response = { error: '' };
  if (data && !/ok/i.test(data.statusText)) {
    switch (data.status) {
    case 401:
      data.type = 'Unauthorized';
      break;
    case 404:
      data.type = 'Not Found';
      break;
    case 500:
      data.type = 'ServerError';
      break;
    default:
      data.type = 'Invalid Data';
      break;
    }
    return { response, error: data };
  }
  return { response: data };
};

/**  @function
 * * Handling the null case and set to safe
 *
 * @name nullSafe
 * @param {function} func
 * @param {*} fallbackValue
 * @returns {*} the value to set safe the method
 */
export const nullSafe = (func, fallbackValue) => {
  try {
    const value = func();
    return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
};


/* export const imageRecognition = async (img) => {
  const detections = await faceapi.detectAllFaces(img[0]);
  return detections;
}; */
