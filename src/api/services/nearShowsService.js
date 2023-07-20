
import { fetchNearByShows } from "../endpoints/nearShowsEndpoint";
import { handleErrorResponse } from "../utils/requestHelper";

export const getNearByShows = async (payload) => {
  try {
    const response = await fetchNearByShows(payload);
    return response.data;
  } catch (error) {
    throw new Error(handleErrorResponse(error));
  }
};
