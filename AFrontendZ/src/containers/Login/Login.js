import React, { Component } from "react";
import LoginForm from "../../components/Login/Login";
import { connect } from "react-redux";
import * as actions from "../../store/actions/login";
import LoadingPage from "../../utilities/loading-page/";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Toast from "../../utilities/toast";
import { toast } from "react-toastify";
import { mobileRegex } from "../../utilities/regex";

class Login extends Component {
  state = {
    errorMsg: null,
    isError: false,
    validateOtp: false,
  };

  sendOtp = (event) => {
    event.preventDefault();
    console.log("phoneNo----", this.state);
    this.props.sendOtp(this.state.phoneNo);
    this.setState({ validateOtp: true });
  };
  
  goBack = () => {
    this.setState({ validateOtp: false });
  }

  validateMob = (event) => {
    event.preventDefault();
    const phone = event.target.value;
    console.log("phone----", phone);
    if (!mobileRegex.test(phone)) {
      this.setState({
        errorMsg: "Please enter valid Mob/Phone Number",
        isError: true,
      });
    } else {
      this.setState({ errorMsg: null, isError: false, phoneNo: phone });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      toast.dark("Hey 👋, its Loading");
    }
    return (
      <div>
        <Toast position={"top-right"}></Toast>
        <Header />
        <LoginForm
          handleSubmit={this.sendOtp}
          handleChange={this.validateMob}
          errorMsg={this.state.errorMsg}
          validateOtp={this.state.validateOtp}
          handleBack={this.goBack}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    sendOtp: (mob) => dispatch(actions.sendOtp(mob)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(Login);
