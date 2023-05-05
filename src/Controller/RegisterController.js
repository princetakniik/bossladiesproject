const { Register } = require("../Model/RegisterModel");
const { hashPassword } = require("../Middleware/hashPassword");
const { Emailveryfi } = require("../Model/emailveryfiMode");
const { loginUser } = require("./LoginController");

const register = async (req, res) => {
  const { ...rest } = req.body;
  try {
    if (
      !rest.email ||
      !rest.password ||
      !rest.otp ||
      !rest.username ||
      !rest.phone
    ) {
      res.status(400).send({ msg: "Please provide all the values" });
    } else {
      const getEmail = await Register.findOne({
        email: rest.email,
      });

      const getPhone = await Register.findOne({
        phone: rest.phone,
      });
      //verify otp
      const userOtp = await Emailveryfi.findOne({
        email: rest.email,
      });
     // console.log("otp", userOtp.otp);

      if (rest.otp !== userOtp.otp) {
        res.send({ msg: "incorrect otp" });
      } else {
      
        //hash Password
        const hashPass = await hashPassword(rest.password);
       // console.log("hash", hashPass);
        if (getEmail != null && getEmail.email == rest.email) {
          res.status(400).json({ msg: `email is already register` });
        } else if (getPhone != null && getPhone.phone == rest.phone) {
          res.status(400).json({ msg: `phone is already register` });
        } else {
          let data = await Register.create({
            email: rest.email.toLowerCase(),
            username: rest.username,
            phone: rest.phone,
            password: hashPass,
          });
          console.log("data", data);
          return res.status(200).json({ data: data });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `user is not register`, err });
  }
};

const registerAllData = async (req, res) => {
  try {
    const getData = await Register.find({
      isDelete: false,
    });
    res.status(200).json({ msg: "all data found", data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not found", err });
  }
};

const registerOneData = async (req, res) => {
  const _id = req.query.id;
  try {
    const getData = await Register.findOne({
      isDelete: false,
      _id,
    });
    res.status(200).json({ msg: "get data successfully", data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};

const registerUpdateData = async (req, res) => {
  const _id = req.query.id;
  const { ...rest } = req.body;
  try {
    const dataUpdate = await Register.updateOne(
      { _id },
      {
        $set: {
          email: rest.email.toLowerCase(),
          username: rest.username,
          phone: rest.phone,
          password: rest.password,
        },
      }
    );

    console.log(dataUpdate);
    res.status(200).json({ msg: "update data successfully", data: dataUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "not update data ", err });
  }
};

const updatePassword = async (req,res)=>{
  const {...rest} = req.body;
  try{
    const emailOtp=await Emailveryfi.findOne({
      email:rest.email
    })
    console.log('email',emailOtp);

    const userData = await Register.findOne({
      email:rest.email
    })
    console.log("userData",userData);
    if (
      !rest.email ||
      !rest.password ||
      !rest.otp
    ) {
      res.status(400).send({ msg: "Please provide all the values" });
    } else{

    }
  }catch(err){
    console.log(err);
    res.status(500).json({msg:`unable to update password`,err})
  }
}

const registerDeleteData = async (req, res) => {
  const _id = req.query.id;
  try {
    const deleted = await Register.deleteOne({
      _id,
    });
    console.log("delete", deleted);
    res.status(200).json({ msg: "delete successfully", deleted });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  register,
  registerAllData,
  registerOneData,
  registerUpdateData,
  updatePassword,
  registerDeleteData,
};
