// const express = require("express");
// const {
//   profilePictureController,
//   getUserController,
// } = require("../controllers");
// const { verifyToken, upload } = require("../lib");
// const Router = express.Router();

// const uploader = upload("/profile-photos").fields([
//   { name: "profile_picture", maxCount: 1 },
// ]);

// Router.patch(
//   "/profile-update",
//   verifyToken,
//   uploader,
//   profilePictureController
// );
// Router.get("/user", getUserController);

// module.exports = Router;

const express = require("express");
const { updateProfile, getUserDetails } = require("../controllers");
const { verifyToken, upload } = require("../lib");
const Router = express.Router();

const uploader = upload("/profile-photos", "PROFILE").fields([
  { name: "profile_picture", maxCount: 1 },
]);

Router.patch("/profile-update", verifyToken, uploader, updateProfile);
Router.get("/user", getUserDetails);

module.exports = Router;
