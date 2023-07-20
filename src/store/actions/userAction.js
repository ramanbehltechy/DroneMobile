
import { getUsers } from "../../api/services/userService";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionType";

export const fetchUsersData = () => {
  return async (dispatch) => {
    dispatch({type:FETCH_USERS_REQUEST});
    try {
      const users = await getUsers();
      dispatch({type:FETCH_USERS_SUCCESS,payload:users});
    } catch (error) {
      dispatch({type:FETCH_USERS_FAILURE,payload:error.message});
    }
  };
};

