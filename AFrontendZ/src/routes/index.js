import loginAnotherWay from "../containers/Login/LoginAnotherWay";
import login from "../containers/Login/Login";
import RegisterForm from "../containers/SignUp/Register";
import patientDetail from "../containers/SignUp/PatientDetail";
import register from "../containers/SignUp/Register";
import appointment from "../containers/Appointment/Appointment";
import LandingPage from "../containers/LandingPage";

export const routes = [
    {
        path:'/',
        component: login
    },
     {
        path:'/Register',
        component: register
    },
    {
        path:'/PatientDetail',
        component: patientDetail
    },
    {
        path:'/signup',
        component: RegisterForm
    },
    {
        path:'/appointment',
        component: appointment
    },
    {
        path:'/dashboard',
        component: LandingPage
    },
    {
        path:'/loginAnotherWay',
        component: loginAnotherWay
    },
]  
