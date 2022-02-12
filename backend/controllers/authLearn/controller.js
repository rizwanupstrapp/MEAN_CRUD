const { User } = require("../../models");
const httpStatus = require("http-status");
const { generateAuthTokens } = require("../../services/token.service");
const MESSAGE = require("../../config/message");
const {
  USER_FIELDS,

} = require("../../config/constant");
const { createRandomString } = require("../../config/utils");
const {
  deleteFileFromS3,
  uploadFileToS3,
} = require("../../services/file-upload.service");

const signup = async (req, res) => {
  const data = req.body;
  if (await User.isEmailExists(data.email)) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: MESSAGE.email_exists, success: false, data: {} });
  }
  const user = await User.create(data);
  const token = await generateAuthTokens(user.id);
  return res.status(httpStatus.CREATED).send({
    message: MESSAGE.signup_success,
    success: true,
    data: { user: user, token },
  });
};


//User Login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.checkPassword(password))) {
    return res
      .status(httpStatus.NOT_FOUND)
      .send({ message: MESSAGE.invalid_credentials });
  }
  if (!user.isActive) {
    return res
      .status(httpStatus.NOT_FOUND)
      .send({ message: MESSAGE.inactive_account });
  }
  
  //generate user jwt token
  const token = await generateAuthTokens(user.id);
  const data = {};
  USER_FIELDS.map((obj) => (data[obj] = user[obj]));


  const wishlist = await WishList.findOne({ user: user._id }).select("classes");
  return res.status(httpStatus.OK).send({
    data: { user: data, token, wishlist },
    message: MESSAGE.login_success,
    success: true,
  });
};



module.exports = {
  signup,
  login
};
