// const multer = require("multer");
// const fs = require("fs");

// const upload = (destination, fileNamePrefix) => {
//   const defaultPath = "./public"; // penyimpanan dibackend
//   const storage = multer.diskStorage;
//   ({
//     destination: function (req, file, cb) {
//       const dirAva = "/profile-picture"; // folder untuk profile-picture di public
//       let directory;
//       if (file.fieldname === "profile_picture") {
//         directory = defaultPath + destination + dirAva;
//       } else {
//         directory = defaultPath + destination;
//       }
//       fs.existsSync(directory)
//         ? cb(null, directory)
//         : fs.mkdir(
//             directory,
//             {
//               recursive: true,
//             },
//             (error) => cb(error, directory)
//           );
//     },
//     filename: function (req, file, cb) {
//       // mengubah nama picture yang diupload ke penyimpnan dibackend
//       let originalName = file.originalName;
//       const fileAva = "AVATAR";
//       let extension = originalName.split(".");
//       let fileName;
//       if (file.fieldname === "profile_picture") {
//         fileName = `${fileNamePrefix}${fileAva}${
//           Date.now() + Math.round(Math.random() * 50000) // validasi ukuran picture
//         }.${extension[extension.length - 1]}`;
//       } else {
//         fileName = `${fileNamePrefix}${Date.now()}.${
//           extension[extension.length - 1]
//         }`;
//       }
//       cb(null, fileName);
//     },
//   });
//   const fileFilter = function (req, file, cb) {
//     // validasi format picture
//     const ext = /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/;
//     if (!file.originalname.match(ext)) {
//       return cb(
//         new Error("Silahkan pilih picture sesuai dengan format yang tertera"),
//         false
//       );
//     }
//     cb(null, true);
//   };
//   return multer({
//     storage,
//     fileFilter,
//   });
// };

// module.exports = { upload };

const multer = require("multer");
const fs = require("fs");

const upload = (destination, fileNamePrefix) => {
  console.log(`Proses upload`);
  const defaultPath = "./public";
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dirAva = "/profile-picture";
      let directory;
      if (file.fieldname === "profile_picture") {
        directory = defaultPath + destination + dirAva;
      } else {
        directory = defaultPath + destination;
      }
      fs.existsSync(directory)
        ? cb(null, directory)
        : fs.mkdir(directory, { recursive: true }, (error) =>
            cb(error, directory)
          );
    },
    filename: function (req, file, cb) {
      let originalName = file.originalname;
      const fileAva = "PROFILE";

      let extention = originalName.split(".");
      let fileName;
      if (file.fieldname === "profile_picture") {
        fileName = `${fileNamePrefix}${fileAva}${
          Date.now() + Math.round(Math.random() * 500000)
        }.${extention[extention.length - 1]}`;
      } else {
        fileName = `${fileNamePrefix}${Date.now()}.${
          extention[extention.length - 1]
        }`;
      }
      cb(null, fileName);
    },
  });

  const fileFilter = function (req, file, cb) {
    const ext = /\.(jpg|jpeg|png|gif|JPEG|JPG)$/;
    console.log("file:", file);
    if (!file.originalname.match(ext)) {
      return cb(new Error("Only listed file types are allowed"), false);
    }
    cb(null, true);
  };

  return multer({
    storage,
    fileFilter,
  });
};

module.exports = { upload };
