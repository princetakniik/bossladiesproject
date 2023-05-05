const { VerifyJWT } = require("../Middleware/jsonwebtoken");

const verifyJwt = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const veryfi = await VerifyJWT(rest.token);
    res.status(200).json(veryfi);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "user not veryfi", err });
  }
};

module.exports = {
  verifyJwt,
};
