import { combineReducers } from 'redux'
import login from './login'
import loader from './loader'
import Register from "./Register";
import {connectRouter} from 'connected-react-router';

export default history => combineReducers({
  router: connectRouter(history),
  login,
  loader,
  Register,
})