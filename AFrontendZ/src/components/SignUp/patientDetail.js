import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  NativeSelect,
  TextField,
  InputBase,
  withStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./register.scss";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const PatientForm = ({ handleSubmit, handleChange, errorMsg, validate }) => {
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState(true);

  const handleDropDownChange = (event) => {
    setAge(event.target.value);
  };

  const handleCheckBox = () => {
    setState(!state);
  };

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
              {validate ? <ArrowBackIosIcon color="primary" /> : null}
              Create your patient account
            </h1>
            <FormLabel className="input-label" component="legend">
              Address line 1
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address1"
              placeholder="Enter your first name"
              onBlur={handleChange}
            />

            {errorMsg}

            <FormLabel className="input-label" component="legend">
              Address line
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address2"
              placeholder="Enter your last name"
              onBlur={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Zip code
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="zipcode"
              placeholder="Enter your dob"
              onBlur={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Security question 1
            </FormLabel>
            <FormControl className="text-input">
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleDropDownChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={10}>What is title of your favorite book?</option>
                <option value={20}>
                  What is the name of the street you grew up on?
                </option>
                <option value={30}>What is your mother’s maiden name?</option>
                <option value={40}>What was the name of your first pet?</option>
                <option value={50}>
                  What was the name of the first company that you worked for?
                </option>
                <option value={60}>
                  What is the name of the street you grew up on?
                </option>
              </NativeSelect>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address2"
              placeholder="Enter your last name"
              onBlur={handleChange}
            />

            <FormLabel className="input-label" component="legend">
              Security question 2
            </FormLabel>
            <FormControl className="text-input">
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleDropDownChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={10}>What is title of your favorite book?</option>
                <option value={20}>
                  What is the name of the street you grew up on?
                </option>
                <option value={30}>What is your mother’s maiden name?</option>
                <option value={40}>What was the name of your first pet?</option>
                <option value={50}>
                  What was the name of the first company that you worked for?
                </option>
                <option value={60}>
                  What is the name of the street you grew up on?
                </option>
              </NativeSelect>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address2"
              placeholder="Enter your last name"
              onBlur={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Security question 3
            </FormLabel>
            <FormControl className="text-input">
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleDropDownChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={10}>What is title of your favorite book?</option>
                <option value={20}>
                  What is the name of the street you grew up on?
                </option>
                <option value={30}>What is your mother’s maiden name?</option>
                <option value={40}>What was the name of your first pet?</option>
                <option value={50}>
                  What was the name of the first company that you worked for?
                </option>
                <option value={60}>
                  What is the name of the street you grew up on?
                </option>
              </NativeSelect>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address2"
              placeholder="Enter your last name"
              onBlur={handleChange}
            />
            <Grid style={{position:'relative',top:-30,left:0,right:0}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleCheckBox}
                  name="checkedB"
                  color="primary"
                />
              }
            />
            <FormLabel style={{fontSize:14}}>
             I agree to the<span className='span'>Terms and Conditions</span>and the <span className='span'>Privacy Policy</span>
            </FormLabel>
            </Grid>
            <div className="submit">
              <Button type="submit" variant="contained" className="btn-primary">
                Register
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientForm;
