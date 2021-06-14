import React, { Component } from "react";
import RegisterForm from "../../components/SignUp/register";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import Toast from "../../utilities/toast";
import { connect } from "react-redux";
import * as actions from "../../store/actions/login";

class Register extends Component {
  state = {
    errorMsg: null,
    isError: false,
    validateOtp: false,
  };

  handleSubmit = (event) => {
    console.log('patientData ==>',JSON.stringify(this.state))
    event.preventDefault();
    this.setState({ validateOtp: true });
  };
  
  handleChangeAll = (event) => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value})
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
        <RegisterForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChangeAll}
          errorMsg={this.state.errorMsg}
          validateOtp={this.state.validateOtp}
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

export default connect(mapStateToProps, mapDispatchtoProp)(Register);