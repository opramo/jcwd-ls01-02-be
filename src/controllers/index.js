const {
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginController,
  forgotPasswordController,
  tokenPasswordController,
  changePassword,
  changePasswordProfileController,
  resetPasswordController,
} = require("./authController");
const { loginAdminController, newProduct } = require("./adminController");
const {
  fetchProductsController,
  fetchProductDetailsController,
} = require("./productController");

const { updateProfile, getUserDetails } = require("./profileControllers");

// const {
//   profilePictureController,
//   getUserController,
// } = require("./profileControllers");

module.exports = {
  newProduct,
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginAdminController,
  loginController,
  forgotPasswordController,
  tokenPasswordController,
  changePassword,
  fetchProductsController,
  fetchProductDetailsController,
  changePasswordProfileController,
  resetPasswordController,
  updateProfile,
  getUserDetails,
  // profilePictureController,
  // getUserController,
};
