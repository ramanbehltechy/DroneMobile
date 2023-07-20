import api from '../utils/apiConfig';

export const fetchUsers = () => {
  return api.get('/users');
};