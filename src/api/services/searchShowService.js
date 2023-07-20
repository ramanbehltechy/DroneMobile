
import { searchShowByTitle } from "../endpoints/searchShowEndpoint";
import { handleErrorResponse } from "../utils/requestHelper";

export const getShowsBySearch = async (payload) => {
 
  try {
    const response = await searchShowByTitle(payload);
    return response.data;
  } catch (error) {
    
    throw new Error(handleErrorResponse(error));
  }
};