import React from "react";
import "./Login.scss";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button, Radio } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {  } from "react-router-dom";

const LoginAnotherWayForm = ({
  selectedValue,
  handleChange,
  handleSubmit,
  showEmail,
  validateOtp,
  showSecurityQuestions,
  btnTitle,
  isEmailSelect,
  handleEmail
}) => {
  return (
    <Container className="container">
      <Grid container className="form-wrapper">
        <Grid item xs={6} className="" span={12}>
          <img
            className="form-img"
            src="http://source.unsplash.com/645x480/?medical"
            alt="spaceship"
          />
        </Grid>
        <Grid item xs={6} className="" span={12} ml={2}>
          <form onSubmit={handleSubmit} className="form" noValidate>
            <h1>
              {1 ? <ArrowBackIosIcon color="primary" /> : null}
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
              onBlur={null}
            />
            <div className="m-container">
              <div className="r-container">
                <Radio
                  checked={selectedValue === "email"}
                  onChange={handleChange}
                  value="email"
                  name="radio-button-demo"
                  color="primary"
                />
                <FormLabel>Email</FormLabel>
              </div>
              <div className="r-container">
                <Radio
                  checked={selectedValue === "securityQ"}
                  onChange={handleChange}
                  value="securityQ"
                  name="radio-button-demo"
                  color="primary"
                />
                <FormLabel>Security Questions</FormLabel>
              </div>
            </div>
            {showEmail ? (
              <>
                <FormLabel className="input-label" component="legend">
                  Email: john****@gmail.com
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  type="tel"
                  name="phone"
                  placeholder="Enter your Email"
                  maxLength="10"
                  onBlur={null}
                />
               { validateOtp ? <>  <FormLabel className="input-label" component="legend">
                  Enter your one-time password sent to your email 
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  name="otp"
                  placeholder=""
                  onBlur={null}
                />  </> : null}
              </>
            ) : null}
            {showSecurityQuestions ? (
              <>
                {" "}
                <FormLabel className="input-label" component="legend">
                  Security question 1: What is title of your favorite book?
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  name="securityQ1"
                  placeholder="Answer"
                  onBlur={null}
                />
                <FormLabel className="input-label" component="legend">
                  Security question 2: What is your mother’s maiden name? *
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  name="securityQ2"
                  placeholder="Answer"
                  onBlur={null}
                />
                <FormLabel className="input-label" component="legend">
                  Security question 3: What was the name of your first pet?
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  type="tel"
                  name="securityQ3"
                  placeholder="Answer"
                  onBlur={null}
                />{" "}
              </>
            ) : null}
            <div className="submit">
              <Button
                type="submit"
                variant="contained"
                className="btn-primary"
                onClick={null}
              >
               {/* {btnTitle ? 'Login' : 'Submit'}  */}
               Submit
              </Button>
            </div>
           {/* {isEmailSelect ?  <div className="submit">
              <Button
                type="submit"
                variant="contained"
                className="btn-primary"
                onClick={null}
              >
               Submit1
              </Button>
            </div> : null} */}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginAnotherWayForm;
