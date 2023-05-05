const jwt = require("jsonwebtoken");
const Constant = require("../config/Constant");

const createJWT = async (user) => {
  const data = {
    user_id: user.user_id,
    email: user.email,
    password: user.password,
  };
  // console.log('data',data);
  try {
    return jwt.sign({ data: data }, Constant.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
  } catch (error) {
    console.log(error);
  }
};

const VerifyJWT = async (token) => {
   // console.log('user',token);
  try {
    return jwt.verify(token, Constant.JWT_SECRET);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "JWT is not verify", err });
  }
};

module.exports = {
  createJWT,
  VerifyJWT,
};
