import api from '../utils/apiConfig';

export const searchShowByTitle = (payload) => {
  
  return api.get('/search', { params: payload });
};