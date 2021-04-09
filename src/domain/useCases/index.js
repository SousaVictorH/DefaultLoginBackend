const Login = require('./users-useCases/Login');
const SignUp = require('./users-useCases/SignUp');
const Authenticate = require('./users-useCases/Authenticate');
const SendMail = require('./email-useCases/SendMail');

module.exports ={
    Login,
    SignUp,
    Authenticate,
    SendMail
};