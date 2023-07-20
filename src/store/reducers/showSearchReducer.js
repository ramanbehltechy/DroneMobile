import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from "../actions/actionType";
  
  const initialState = {
    loading: true,
    searchShows: [],
    error: null,
  };
  
  const showSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SEARCH_SUCCESS:

        return {
          ...state,
          loading: false,
          searchShows: action.payload,
        };
      case FETCH_SEARCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default showSearchReducer;
  