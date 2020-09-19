import initialState from "../state";
import { GET_USERS, GET_USERS_SUCCESS } from "../actions";
const state = {
  users: [],
  isLoading: false,
};
export const theDefaultReducer = (state = initialState, action) => state;

export const firstNamedReducer = (state = 1, action) => state;

export const secondNamedReducer = (state = 2, action) => state;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_USERS_SUCCESS:
      console.log("in reducers  getUsersSuccess");
      return Object.assign({}, state, {
        isLoading: false,
        users: action.users,
      });

    default:
      return state;
  }
};
