import * as actionType from '../actionType'
import {

    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actionType";

const initialState = {
    specialities: []
}

const login = (state = initialState, action) => {
    console.log("Login Reducer",action);
    switch (action.type) {
        case actionType.LOAD_SPECIALITIES: {
            return {
                ...state,
                specialities: action.value
            }
        }
        default:
            return state

    }
}

export default login;








  
  // const user = JSON.parse(localStorage.getItem("user"));
  
  // const initialState = user
  //   ? { isLoggedIn: true, user }
  //   : { isLoggedIn: false, user: null };
  
  // const login = (state = initialState, action) => {
  //   const { type, payload } = action;
  
  //   switch (type) {
  //     case LOGIN_SUCCESS:
  //       return {
  //         ...state,
  //         isLoggedIn: true,
  //         user: payload.user,
  //       };
  //     case LOGIN_FAIL:
  //       return {
  //         ...state,
  //         isLoggedIn: false,
  //         user: null,
  //       };
  //     case LOGOUT:
  //       return {
  //         ...state,
  //         isLoggedIn: false,
  //         user: null,
  //       };
  //     default:
  //       return state;
  //   }
  // }