//const { response } = require("express");
const AppError = require("../utils/AppError");

function verifyUserAuthorization(roleToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    if (role !== roleToVerify) {
      throw new AppError("Usuário não autorizado", 401);
    }

    return next();
  };
}

module.exports = verifyUserAuthorization;
