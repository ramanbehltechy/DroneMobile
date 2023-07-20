import api from '../utils/apiConfig';

export const fetchShowByLocation = (payload) => {
  return api.get(`/show/${payload}`,);
};
