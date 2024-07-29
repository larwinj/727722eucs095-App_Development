import { combineReducers } from "redux";
// import axios from 'axios';

const initialState = {
  email: "",
  name:"",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
