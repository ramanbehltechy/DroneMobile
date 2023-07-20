import { SET_SELECTED_SHOW } from "./actionType";

export const setSelectedShow = (show) => {
    return (dispatch) => {
      dispatch({
        type: SET_SELECTED_SHOW,
        payload: show
      });
    };
  };