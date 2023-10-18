import axios from 'axios';

const BASE_URL = 'https://storey-server.onrender.com/';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});