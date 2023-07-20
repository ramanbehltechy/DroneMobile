import { FETCH_SHOWBY_LOCATION_FAILURE,FETCH_SHOWBY_LOCATION_REQUEST,FETCH_SHOWBY_LOCATION_SUCCESS } from "../actions/actionType";

  const initialState = {
    loading: false,
    showByLocation: null,
    error: null,
  };
  
  const singleShowReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SHOWBY_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SHOWBY_LOCATION_SUCCESS:

        return {
          ...state,
          loading: false,
          showByLocation: action.payload,
        };
      case FETCH_SHOWBY_LOCATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default singleShowReducer;
  