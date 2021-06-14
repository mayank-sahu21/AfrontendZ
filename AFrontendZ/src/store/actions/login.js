import * as actionType from "../actionType";
import {push} from 'connected-react-router';
import {
  IS_USER_LOGGED_IN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../actionType";
import { setLoading } from "./loader";
import AuthService from "../services/auth.service";

export const checkPatientLoggedIn = () => {
  return {
    type: IS_USER_LOGGED_IN,
  };
};

export const sendOtp = (phoneNumber, channel) => (dispatch) => {
  // return AuthService.sendOtp(phoneNumber, channel).then(
  //   (response) => {
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //     });
  //     return Promise.resolve();
  //   },
  //   ///////////////////////////////////////////////////////////////////
  //   (error) => {
  //     const message =
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //       error.message ||
  //       error.toString();

  //     dispatch({
  //       type: LOGIN_FAIL,
  //     });

  //     return Promise.reject();
  //   }
  // );
   dispatch(push('/dashboard'));
};
