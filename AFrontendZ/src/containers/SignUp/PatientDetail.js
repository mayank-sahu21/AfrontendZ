import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import Toast from "../../utilities/toast";
import { connect } from "react-redux";
import * as actions from "../../store/actions/login";
import PatientForm from "../../components/SignUp/patientDetail";

class PatientDetail extends Component {
  state = {
    errorMsg: null,
    isError: false,
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
        <PatientForm
          handleSubmit={null}
          handleChange={null}
          errorMsg={null}
          validate={1}
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

export default connect(mapStateToProps, mapDispatchtoProp)(PatientDetail);
