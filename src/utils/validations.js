const {
  emailMalformed,
  dataMalformed
} = require('../helpers/messages');

const { 
    badRequest,
    missingParamError
} = require('../helpers/httpResponse');

function objIsEmpty(obj) {
  for (let key in obj) {
    if (key) return false;
  }
  return true;
}

function missingParam({ source, listParams }) {
  for (let param in listParams) {
    if (!listParams[param]) throw missingParamError({ source, param });
  }
  return false;
}

function emailIsValid({ source, email = '' }) {
    const emailIsValid = email.match(
      /^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/,
    );
  
    if (!emailIsValid) {
        throw badRequest({ source, message: emailMalformed, data: 'email' });
    }
  
    return true;
}

function paramsIsMalformed({ source, listParams }) {
  for (let param in listParams) {
    const parameter = listParams[param];

    if (!paramIsValid(parameter))
      throw badRequest({ source, message: dataMalformed, data: param });
  }
  return false;
}

function paramIsValid(param) {
  return param.match(/select|from|\*|<|>/) ? false : true;
}

module.exports = {
  emailIsValid,
  objIsEmpty,
  missingParam,
  paramsIsMalformed
};
