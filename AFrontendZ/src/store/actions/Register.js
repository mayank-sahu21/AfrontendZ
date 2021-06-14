import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
} from "../actionType";
import AuthService from "../services/auth.service";
import { setLoading } from './loader';

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};



export const sendOtp = (data) => {
    return dispatch => {
        dispatch(setLoading(true));
        setTimeout(()=>{
        dispatch(setLoading(false));
        },2000)
        // axios.post('/orders.json', orderData).then((res) => {
        //     console.log(res.data);
        //     dispatch(setLoading());
        // }).catch((error) => {
        //     dispatch(purchaseFail());
        // })
    }
}