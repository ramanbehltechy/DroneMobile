import api from '../utils/apiConfig';

export const fetchNearByShows = (payload) => {
  
  return api.post('/near-show',payload);
};  