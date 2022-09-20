import { LOGOUT, REGISTER, LOGIN } from "../types";

const initialUser = {};
const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case REGISTER:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};
export default userReducer;
