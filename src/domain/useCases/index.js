const Login = require('./users-useCases/Login');
const SignUp = require('./users-useCases/SignUp');
const Authenticate = require('./users-useCases/Authenticate');
const SendMail = require('./email-useCases/SendMail');
const Update = require('./users-useCases/Update');
const GetUser = require('./users-useCases/Get');

const PassCreate = require('./passwordRecovery-useCases/create');
const PassRead = require('./passwordRecovery-useCases/read');
const PassRemove = require('./passwordRecovery-useCases/remove');

module.exports ={
    Login,
    SignUp,
    Authenticate,
    SendMail,
    Update,
    GetUser,
    PassCreate,
    PassRead,
    PassRemove
};