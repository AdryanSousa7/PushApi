import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web.dragonball-api.com'
});

export default api;
