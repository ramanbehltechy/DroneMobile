import { SET_SELECTED_SHOW } from "../actions/actionType";


const initialState = {
  selectedShow: null
};


const singleSearchShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SHOW:
      return {
        ...state,
        selectedShow: action.payload
      };
    default:
      return state;
  }
};

export default singleSearchShowReducer;
