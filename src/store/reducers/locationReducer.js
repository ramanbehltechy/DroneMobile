import { FETCH_NEARBY_SHOWS_REQUEST,FETCH_NEARBY_SHOWS_SUCCESS, FETCH_NEARBY_SHOWS_FAILURE } from "../actions/actionType";
  
  const initialState = {
    loading: true,
    nearbyShows: [],
    error: null,
  };
  
  const nearByShowsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEARBY_SHOWS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_NEARBY_SHOWS_SUCCESS:

        return {
          ...state,
          loading: false,
          nearbyShows: action.payload,
        };
      case FETCH_NEARBY_SHOWS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default nearByShowsReducer;
  