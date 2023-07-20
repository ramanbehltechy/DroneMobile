const initialState = {
    loading: false,
timeZoneName:null,
    error: null,
  };
  
  const timeZoneReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_TIMEZONE":
        return {
          ...state,
          timeZoneName:action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default timeZoneReducer;
  