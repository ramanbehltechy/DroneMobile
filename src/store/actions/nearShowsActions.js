import { getNearByShows } from "../../api/services/nearShowsService";
import { FETCH_NEARBY_SHOWS_FAILURE, FETCH_NEARBY_SHOWS_REQUEST, FETCH_NEARBY_SHOWS_SUCCESS } from "./actionType";


export const fetchNearbyShowsAction = (payload) => {
  return async (dispatch) => {
    dispatch({type:FETCH_NEARBY_SHOWS_REQUEST});

    try {
      const results = await getNearByShows(payload);
      
      dispatch({type:FETCH_NEARBY_SHOWS_SUCCESS,payload: results})
    } catch (error) {
      dispatch({type:FETCH_NEARBY_SHOWS_FAILURE,payload:error.message});
    }
  };
};