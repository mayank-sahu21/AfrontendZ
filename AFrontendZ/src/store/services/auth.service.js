import axios from "axios";

const API_URL = "http://localhost:3000/";

class AuthService {

  sendOtp(phoneNumber, channel) {
    return axios
      .post(API_URL + "getotp", { phoneNumber, channel:'sms' })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  tryDifferent(phoneNumber, option ) {
    return axios.post(API_URL + "get-details", {
     phoneNumber,
     option
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

}

export default new AuthService();