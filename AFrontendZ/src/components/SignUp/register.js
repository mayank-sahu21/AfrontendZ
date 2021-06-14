import React from "react";
import {
  Button,
  Container,
  FormLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./register.scss";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  phone: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!values.dob) {
    errors.dob = "DOB is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.phone) {
    errors.phone = "Cellphone is required";
  }

  return errors;
};

const RegisterForm = ({ handleSubmit,validateOtp,handleChange }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          // handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;

        return (
          <Container className="container">
            <Grid container className="form-wrapper">
              <Grid item xs={6} className="" span={12}>
                <img
                  className="form-img"
                  src="http://source.unsplash.com/620x700/?medical"
                  alt="spaceship"
                  fit
                />
              </Grid>
              <Grid item xs={6} className="" span={12} ml={2}>
                <form onSubmit={handleSubmit} className="form" noValidate>
                  <h1>
                    {validateOtp ? <ArrowBackIosIcon color="primary" /> : null}
                    Register to book appointment
                  </h1>
                  <FormLabel className="input-label" component="legend">
                    First name
                  </FormLabel>
                  <TextField
                    required
                    id="filled-required"
                    variant="outlined"
                    size="small"
                    className="text-input"
                    name="firstName"
                    placeholder="Enter your first name"
                    onBlur={handleChange}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: -25,
                      left: 0,
                      fontSize: 14,
                      color: "red",
                    }}
                  >
                    {errors.firstName}
                  </div>
                  <FormLabel className="input-label" component="legend">
                    Last name
                  </FormLabel>
                  <TextField
                    required
                    id="filled-required"
                    variant="outlined"
                    size="small"
                    className="text-input"
                    name="lastName"
                    placeholder="Enter your last name"
                    onBlur={handleChange}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: -25,
                      left: 0,
                      fontSize: 14,
                      color: "red",
                    }}
                  >
                    {errors.lastName}
                  </div>
                  <FormLabel className="input-label" component="legend">
                    Date of birth
                  </FormLabel>
                  <TextField
                    required
                    id="filled-required"
                    variant="outlined"
                    size="small"
                    className="text-input"
                    name="dob"
                    placeholder="Enter your dob"
                    onBlur={handleChange}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: -25,
                      left: 0,
                      fontSize: 14,
                      color: "red",
                    }}
                  >
                    {errors.dob}
                  </div>
                  <FormLabel className="input-label" component="legend">
                    Email
                  </FormLabel>
                  <TextField
                    required
                    id="filled-required"
                    variant="outlined"
                    size="small"
                    className="text-input"
                    name="email"
                    placeholder="Enter your email"
                    onBlur={handleChange}
                  />
                  <div
                    style={{
                      position: "relative",
                      top: -25,
                      left: 0,
                      fontSize: 14,
                      color: "red",
                    }}
                  >
                    {errors.email}
                  </div>
                  <FormLabel className="input-label" component="legend">
                    Cell phone
                  </FormLabel>
                  <TextField
                    required
                    id="filled-required"
                    variant="outlined"
                    size="small"
                    className="text-input"
                    name="phone"
                    placeholder="Enter your cell phone"
                    onBlur={handleChange}
                  />

                  <div
                    style={{
                      position: "relative",
                      top: -25,
                      left: 0,
                      fontSize: 14,
                      color: "red",
                    }}
                  >
                    {errors.phone}
                  </div>

                  {validateOtp ? (
                    <div className="form-inputs">
                      <FormLabel className="input-label" component="legend">
                        Enter your one-time password sent to your phone number
                      </FormLabel>
                      <TextField
                        required
                        id="filled-required"
                        variant="outlined"
                        size="small"
                        className="text-input"
                        helperText="Get one-time password"
                      />
                    </div>
                  ) : null}
                  <div className="submit">
                    <Button
                      type="submit"
                      variant="contained"
                      className="btn-primary"
                    >
                      {validateOtp ? "Next" : "Submit"}
                    </Button>
                    <h5>
                      Already have an account? <Link to="/">Log in</Link>
                    </h5>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
