import { apiPath } from '../../constants/apiPath';
import api from '../utils/apiConfig';

export const fetchNearByShows = (payload) => {
  
  return api.post(apiPath.nearByShows,payload);
};

