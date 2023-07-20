import { apiPath } from '../../constants/apiPath';
import api from '../utils/apiConfig';

export const searchShowByTitle = (payload) => {
  
  return api.get(apiPath.searchShow, { params: payload });
};