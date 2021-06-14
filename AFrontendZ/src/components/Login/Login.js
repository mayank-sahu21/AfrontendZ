import React from "react";
import "./Login.scss";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit, handleChange, errorMsg, validateOtp,handleBack }) => {
  return (
    <Container className="container">
      <Grid container className="form-wrapper">
        <Grid item xs={6} className="" span={12}>
          {/* <img className="form-img" src="img/img-2.svg" alt="spaceship" /> */}
          <img className="form-img" src="http://source.unsplash.com/645x480/?medical" alt="spaceship" />
        </Grid>
        <Grid item xs={6} className="" span={12} ml={2}>
          <form onSubmit={handleSubmit} className="form" noValidate>
            <h1>
              {validateOtp ? <ArrowBackIosIcon color="primary"  onClick={() =>  handleBack()} /> : null}
              Login to your account
            </h1>
            <FormLabel className="input-label" component="legend">
              Cellphone
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              type="tel"
              name="phone"
              placeholder="Enter your Cell Phone"
              maxLength="10"
              onBlur={handleChange}
            />
            {errorMsg}
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
                  helperText="Resend one-time password"
                />
              </div>
            ) : null}
            <div className="submit">
              <Button type="submit" variant="contained" className="btn-primary">
                {validateOtp ? "Login" : "Submit"}
              </Button>
              <h5>
                Don’t have an account? <Link to="/Register">Register</Link>  
              </h5>
            </div>
            <h5 className="error-login">
              Trouble logging in? <Link to="/LoginAnotherWay">Try different way</Link>   
            </h5>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};  

export default LoginForm;
