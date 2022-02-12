const { Joi } = require("express-validation");

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{6,15}$/;
module.exports = {
  signup: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(EMAIL_REGEX).required(),
      password: Joi.string().min(6).max(18).required(),
      roleType: Joi.number().optional()
    }),
  },
  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
  }
};
