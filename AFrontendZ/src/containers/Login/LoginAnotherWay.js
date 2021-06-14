import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Toast from "../../utilities/toast";
import { toast } from "react-toastify";
import * as actions from "../../store/actions/login";
import LoginAnotherWayForm from "../../components/Login/LoginAnotherWay";

class LoginAnotherWay extends Component {
  state = {
    selectedValue: "",
    showEmail: false,
    errorMsg: null,
    isError: false,
    validateOtp: false,
    showSecurityQuestions: false,
    isEmailSelect : false,
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      selectedValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedValue } = this.state;
    
    if (selectedValue === "email") {
      this.setState({ showEmail: true,showSecurityQuestions:false });
    } else if (selectedValue === "securityQ") {
      this.setState({ showSecurityQuestions: true, showEmail: false });
    }
  };

  validateEmail= () => {
    const { selectedValue } = this.state;

    if(selectedValue !== ''){
      this.setState({isEmailSelect: true })
    }
  }
  
  render() {
    const { loading } = this.props;
    if (loading) {
      toast.dark("Hey 👋, its Loading");
    }
    return (
      <div>
        <Toast position={"top-right"}></Toast>
        <Header />
        <LoginAnotherWayForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          selectedValue={this.state.selectedValue}
          showEmail={this.state.showEmail}
          showSecurityQuestions={this.state.showSecurityQuestions}
          validateOtp={this.state.validateOtp}
          isEmailSelect={this.state.isEmailSelect}
          handleEmail={this.validateEmail}
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

export default connect(mapStateToProps, mapDispatchtoProp)(LoginAnotherWay);
