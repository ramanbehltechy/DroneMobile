

import { fetchShowByLocation } from "../endpoints/singleShowEndpoint";
import { handleErrorResponse } from "../utils/requestHelper";

export const getSingleShowByLocation = async (payload) => {
  try {
    const response = await fetchShowByLocation(payload);
    return response.data;
  } catch (error) {
    throw new Error(handleErrorResponse(error));
  }
};