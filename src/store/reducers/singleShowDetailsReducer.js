  const initialState = { 
    singleShowData: null,
  };
  
  const singleShowDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'SINGLE_SHOW_DATA':

        return {
          ...state,
          singleShowData: action.payload,
        };
      
      default:
        return state;
    }
  };
  
  export default singleShowDetailsReducer;
  