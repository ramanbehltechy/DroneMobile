

import { fetchUsers } from '../endpoints/userEndpoint';
import { handleErrorResponse } from '../utils/requestHelper';


export const getUsers = async () => {
  try {
    const response = await fetchUsers();
    return response.data;
  } catch (error) {
    throw new Error(handleErrorResponse(error));
  }
};