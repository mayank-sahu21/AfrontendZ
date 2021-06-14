import * as Yup from "yup";


const email = Yup.string().required("Required").email("Invalid");
const password = Yup.string().required("Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^\$\*.[\]{}()\?\-"!@#%&\/\\,><':;|_~`=+])(?=.{8,})/, "Invalid"); // eslint-disable-line
const zipCode = Yup.string().required("Required").matches(/^[0-9]{5}(-[0-9]{4})?$/, "Invalid");
const phoneNumber = Yup.string().required("Required").matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Invalid");



export const register = Yup.object().shape({
    firstName: Yup.string().required("firstname required"),
    lastName: Yup.string().required(),   
});