import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/usuarios',
});

export default api;
