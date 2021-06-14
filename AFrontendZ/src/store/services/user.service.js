import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

class UserService {
  
  getotp() {
    return axios.get(API_URL + "getotp");
  }

  validateEmail() {
    return axios.get(API_URL + "validate-Email");
  }

  register() {
    return axios.get(API_URL + "register", { headers: authHeader() });
  }

  login() {
    return axios.get(API_URL + "login", { headers: authHeader() });
  }

  getSecurityquestion() {
    return axios.get(API_URL + "get-security-qes", { headers: authHeader() });
  }
}

export default new UserService();


// class UserService {
//   getPublicContent() {
//     return axios.get(API_URL + "all");
//   }

//   getUserBoard() {
//     return axios.get(API_URL + "user", { headers: authHeader() });
//   }

//   getModeratorBoard() {
//     return axios.get(API_URL + "mod", { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + "admin", { headers: authHeader() });
//   }
// }
