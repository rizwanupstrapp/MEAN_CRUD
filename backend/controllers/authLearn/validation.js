const { Joi } = require("express-validation");
const { EMAIL_REGEX } = require("../../config/constant");

module.exports = {
  signup: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(EMAIL_REGEX).required().messages({
        "string.pattern.base": "Invalid Email",
      }),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    }),
  },
  login: {
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
      rememberMe: Joi.boolean(),
    }),
  },
  socialLogin: {
    body: Joi.object({
      firstName: Joi.string().allow(null).allow("").optional(),
      lastName: Joi.string().allow(null).allow("").optional(),
      email: Joi.string().regex(EMAIL_REGEX).allow(null).allow("").optional(),
      socialId: Joi.string().required(),
      socialType: Joi.string().required().allow("G", "F", "A"),
      image: Joi.string().optional(),
    }),
  },
  editProfile: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .regex(EMAIL_REGEX)
        .messages({
          "string.pattern.base": "Invalid Email",
        })
        .optional(),
      image: Joi.string().allow("").allow(null),
      removedImage: Joi.string().allow("").allow(null),
    }),
  },
  forgotPassword: {
    body: Joi.object({
      email: Joi.string().required(),
    }),
  },
  resetPassword: {
    body: Joi.object({
      newPassword: Joi.string()
        .regex(/[a-zA-Z0-9]{6,18}/)
        .required(),
      confirmPassword: Joi.string()
        .regex(/[a-zA-Z0-9]{6,18}/)
        .required(),
    }),
  },
  changePassword: {
    body: Joi.object({
      oldPassword: Joi.string()
        .regex(/[a-zA-Z0-9]{6,18}/)
        .required(),
      newPassword: Joi.string()
        .regex(/[a-zA-Z0-9]{6,18}/)
        .required(),
      confirmPassword: Joi.string()
        .regex(/[a-zA-Z0-9]{6,18}/)
        .required(),
    }),
  },
};
