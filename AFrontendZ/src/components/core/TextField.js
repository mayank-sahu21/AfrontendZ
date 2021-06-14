import React from "react";
import PropTypes from "prop-types";
import { Box, InputLabel, InputBase, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "label + &": {
      paddingTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 0,
    position: "relative",
    backgroundColor: "#f4f4f4",
    border: "1px solid",
    borderColor: props => props.error ? "#ff6633" : "#f4f4f4",
    padding: "11px 12px",
    "&:focus": {
      borderColor: props => props.error ? "#ff6633" : "#009999",
      "&:hover": {
        borderColor: props => props.error ? "#ff6633" : "#009999",
      },
    },
    "&:hover": {
      backgroundColor: props => props.disabled ? "#f4f4f4" : "#e5e5e5",
      borderColor: props => props.error ? "#ff6633" : (props.disabled ? "#f4f4f4" : "#e5e5e5"),
    },
  },
}));

const TextFieldBase = (props) => { 
  const classes = useStyles(props);
  return (<InputBase {...props} classes={{...props.classes, ...classes}} />);
};

const TextField = React.forwardRef(({
	autoFocus,
	inputComponent,
	defaultValue,
	disabled,
	error,
	helperText,
	id,
	label,
	labelHidden,
	name,
  onChange,
  onBlur,
	persistHelperText,
	required,
	type,
  value,
  autoComplete,
  inputProps,
}, ref) => (
  <Box pt={1.5}>
    {labelHidden
      ? <Box component="label" display="none">{label}</Box>
      : <InputLabel htmlFor={id} required={required} disabled={disabled}>{label}</InputLabel>
    }
    <TextFieldBase
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      autoFocus={autoFocus}
      name={name}
      type={type}
      value={value}
      error={error}
      id={id}
      inputComponent={inputComponent}
      autoComplete={autoComplete}
      inputProps={inputProps}
    />
    <FormHelperText error={error} disabled={disabled}>{(error || persistHelperText) && helperText}</FormHelperText>
  </Box>
));

TextField.defaultProps = {
	disabled: false,
	error: false,
	labelHidden: false,
	type: "text",
  persistHelperText: false,
  inputProps: {},
};

TextField.propTypes = {
	autoFocus: PropTypes.bool,
	inputComponent: PropTypes.func,
	defaultValue: PropTypes.node,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	helperText: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired, // Even if labeless is true, for accessibility, we will need it. Mark "labelHidden = true"
	labelHidden: PropTypes.bool,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	persistHelperText: PropTypes.bool,
	required: PropTypes.bool,
	type: PropTypes.string,
  value: PropTypes.node,
  inputProps: PropTypes.object,
};

export default TextField;
