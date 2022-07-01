// const profilePictureService = async (data) => {
//   const { id } = data.user;
//   let { addPhoto, editPhoto } = data.body;
//   let sql, conn, result;

//   try {
//     conn = await dbCon.promise().getConnection();

//     sql = `SELECT * FROM users WHERE id = ?`;
//     [result] = await conn.query(sql, [id]);

//     sql = `UPDATE user_details SET profile_picture = ? WHERE user_id = ?`;
//     [result] = await conn.query(sql, [addPhoto, id]);

//     sql = `UPDATE user_details SET profile_picture = ? WHERE user_id = ?`;
//     [result] = await conn.query(sql, [editPhoto, id]);

//     conn.release();
//   } catch (error) {
//     conn.release();
//     throw new Error(error.message);
//   }
// };

// const getUserServices = async (req, res) => {
//   const { profile_username } = req.query;
//   let sql, conn;
//   try {
//     conn - dbCon.promise();
//     sql = `SELECT * FROM users JOIN user_details ON (users_id = user_details.user_id) where users.users.username = ? `;
//     let [result1] = await conn.query(sql, profile_username);
//     if (!result1.length) {
//       throw { message: "User not found" };
//     }
//     return res.status(200).send(result1[0]);
//   } catch (error) {
//     return res.status(500).send({ message: error.message || error });
//   }
// };

// module.exports = { profilePictureService, getUserServices };
