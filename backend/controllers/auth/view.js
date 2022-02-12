//========================== Load Modules Start ====================================
const { User } = require("../../models");
const httpStatus = require("http-status");
const {
  generateAuthTokens,
  genUsrToken,
} = require("../../services/token.service");
const MESSAGE = require("../../config/message");
// const { v4: uuidv4 } = require("uuid");
const { USER_FIELDS } = require("../../config/constant");
const {
  generateOTP,
  sendEmail
} = require("../../config/utils");
// 
var bcrypt = require('bcrypt');
const mapper = require("./mapper");
//========================== Load Modules End ==============================================

const signup = async (req, res) => {
  const data = req.body;
  let emailLowerCase = data.email.toLowerCase();
  if (await User.isEmailExists(emailLowerCase)) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: MESSAGE.emailExists });
  }
  data.email = data.email.toLowerCase();

  await User.create(data).then(async (result) => {
    /* to generate token while registaration */
    let token = await generateUserToken(req, result);
    /* it  will generate the rendom string */
    result.userJwt = token;
    return res.json({
      code: 200,
      status: true,
      message: MESSAGE.signupSuccess,
      data: result
    })
  }).catch((error) => {
    return res.json({
      code: 404,
      status: false,
      message: MESSAGE.errorSighnUp,
      data: {}
    })
  });

};


/**for generate user token
 *
 * @param {object} isExist userDetails
 */

function generateUserToken(req, isExist) {
  return genUsrToken({
    userId: isExist._id,
    email: isExist.email,
  })
    .then(async (jwt) => {
      let query = {
        _id: isExist._id,
      };
      let updateDetails = {
        userJwt: jwt
      };
      return User
        .findOneAndUpdate(query, { $set: updateDetails })
        .then((result) => {
          return jwt;
        })
        .catch((err) => {
          return json({
            code: 404,
            status: false,
            message: error.message,
            data: {}
          })
        });
    });
}

const login = async (req, res) => {
  const { email, password, } = req.body;
  await User.findOne({ email: { $regex: new RegExp("^" + req.body.email.toLowerCase(), "i") } }).then(async (user) => {
    if (!user || !(await user.checkPassword(password))) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: MESSAGE.invalidCredentials });
    }
    if (!user.isActive) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: MESSAGE.inactiveAccount });
    }
    const token = await generateAuthTokens(user.id);
    /* to save user token */
    user.userJwt = token.token;
    await user.save().then((result) => {
      let response = mapper.registerAndLoginMappingRes(result);
      return res.json({
        code: 200,
        status: true,
        message: MESSAGE.loginSuccessfull,
        data: response
      })
    }).catch((error) => {
      return error;
    });
  }).catch((error) => {
    return res.json(
      {
        httpCode: 404,
        status: false,
        message: MESSAGE.emailNotExists,
        data: {}
      })
  })
};

const logout = async (req, res) => {
  let findUserQuery = {
    userJwt: req.headers.authorization
  };
  let updateData = {
    userJwt: "",
  };
  User.findOneAndUpdate(findUserQuery, { $set: updateData })
    .then(async (user) => {
      if (user) {
        return res.json({
          httpCode: 200,
          statusFalse: true,
          message: MESSAGE.logoutSuccess,
          data: {}
        })
      } else {
        return res.json({
          httpCode: 403,
          statusFalse: false,
          message: MESSAGE.unauthorized
        })
      }
    }).catch((error) => {
      return error;
    })
};

module.exports = {
  signup,
  login,
  logout
};
