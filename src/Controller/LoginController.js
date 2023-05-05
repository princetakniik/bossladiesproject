const { comparePassword } = require("../Middleware/comparePassword");
const { createJWT } = require("../Middleware/jsonwebtoken");
const { Register } = require("../Model/RegisterModel");

const loginUser = async (req, res) => {
  const { ...rest } = req.body;

  try {
    if (!rest.email || !rest.password) {
      res.status(400).send({ msg: "Please provide all the values" });
    }
    const userData = await Register.findOne({
      email: rest.email.toLowerCase(),
    });

    if (userData == null || userData == undefined) {
      res.status(400).json({ msg: "no data found" });
    } else {
      //compare password
      const compare = await comparePassword(rest.password, userData.password);
      if (!compare) {
        res
          .status(500)
          .send({ success: false, message: "email or passwords do not match" });
      } else {
        const token = await createJWT(userData);
        const user = await Register.updateOne(
          { _id: userData._id },
          {
            $set: {
              token: token,
            },
          }
        );
        res.status(200).json({ msg: `user token  `, data: token });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "something went wrong", err });
  }
};

module.exports = {
  loginUser,
};
