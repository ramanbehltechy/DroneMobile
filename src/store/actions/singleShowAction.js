
import { getSingleShowByLocation } from "../../api/services/singleShowService";
import {FETCH_SHOWBY_LOCATION_REQUEST,FETCH_SHOWBY_LOCATION_SUCCESS,FETCH_SHOWBY_LOCATION_FAILURE  } from "./actionType";

export const fetchShowByLocationAction = (payload) => {
  return async (dispatch) => {
    dispatch({type:FETCH_SHOWBY_LOCATION_REQUEST});

    try {
      const results = await getSingleShowByLocation(payload);  
      dispatch({type:FETCH_SHOWBY_LOCATION_SUCCESS,payload: results.data})
    } catch (error) {
      dispatch({type:FETCH_SHOWBY_LOCATION_FAILURE,payload:error.message});
    }
  };
};