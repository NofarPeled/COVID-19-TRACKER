import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:4000/api/';

axios.defaults.withCredentials = true;

async function ajax(endpoint, method = 'get', data = null, query = null) {
  try {
    const res = await axios({
      url: BASE_URL + endpoint,
      method,
      data,
      params: query
    });
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data.error : err
  }
}

export default {
  get(endpoint, data, query) {
    return ajax(endpoint, 'GET', data, query);
  }
};
