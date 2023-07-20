import axios from 'axios';
import { baseURL } from '../../constants/apiConstant';

const api = axios.create({
  //  baseURL:'http://172.190.179.251:8080/api/api',
  baseURL: `${baseURL}/api`,
  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
