const Login = require('./users-useCases/Login');
const SignUp = require('./users-useCases/SignUp');
const Authenticate = require('./users-useCases/Authenticate');
const SendMail = require('./email-useCases/SendMail');
const Update = require('./users-useCases/Update');

module.exports ={
    Login,
    SignUp,
    Authenticate,
    SendMail,
    Update
};