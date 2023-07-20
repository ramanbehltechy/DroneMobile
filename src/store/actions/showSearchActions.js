
import { getNearByShows } from "../../api/services/locationService";
import { getShowsBySearch } from "../../api/services/searchShowService";
import {  FETCH_SEARCH_FAILURE, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "./actionType";

export const showSearchActions = (payload) => {
  return async (dispatch) => {
    dispatch({type:FETCH_SEARCH_REQUEST});

    try {
      const results = await getShowsBySearch(payload);   
      
      dispatch({type:FETCH_SEARCH_SUCCESS,payload: results})
    } catch (error) {
      dispatch({type:FETCH_SEARCH_FAILURE,payload:error.message});
    }
  };
};


