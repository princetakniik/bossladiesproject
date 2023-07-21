const { Register } = require("../Model/RegisterModel");
const { UserAddress } = require("../Model/userAddressModel");

const userDetails = async (req, res) => {
  const { ...rest } = req.body;

  const userRegister = await Register.findOne({
    email: rest.email,
  });
  console.log("userregister", userRegister._id.valueOf().toString());
  try {
    const userData = await UserAddress.create({
      email: rest.email.toLowerCase(),
      Additional: rest.Additional,
      country: rest.country,
      state: rest.state,
      city: rest.city,
      address: rest.address,
      zipCode: rest.zipCode,
      startDate: rest.startDate,
      endDate: rest.endDate,
    });
    res
      .status(200)
      .json({ msg: `user details is create successfully`, data: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `user details is not register`, err });
  }
};

const getUserAll = async (req, res) => {
  try {
    const userData = await Register.aggregate([
      {
        $lookup: {
          from: "useraddresses",
          localField: "email",
          foreignField: "email",
          as: "UserAddress",
        },
      },
    ]);

    res.status(200).json({ msg: `user details all `, data: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `user data is not get `, err });
  }
};

const getDataById = async (req, res) => {
  const { email } = req.query;
  try {
    const userData = await Register.aggregate([
      { $match: { email: email } },
      {
        $lookup: {
          from: "useraddresses",
          localField: "email",
          foreignField: "email",
          as: "UserAddress",
        },
      },
      {
        $unwind: "$UserAddress",
      },
    ]);

    res.status(200).json({ msg: `user data find by user id `, data: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `data not found by _id`, err });
  }
};

const getAllmembership = async (req, res) => {
  try {
    const membershipUser = await db.UserAddress.find({
      isDelete: false,
    });
    console.log("membershipUser", membershipUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all membership user data` });
  }
};

const updateuserdetails = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const updateUser = await UserAddress.updateOne(
      { userId: req.query.userId },
      {
        $set: {
          profilePhotos: rest.profilePhotos,
          username: rest.username,
          phone: rest.phone,
          Additional: rest.Additional,
          country: rest.country,
          state: rest.state,
          city: rest.city,
          address: rest.address,
          zipCode: rest.zipCode,
          startDate: rest.startDate,
          endDate: rest.endDate,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `user details update successfully`, data: updateUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `user data is not update` });
  }
};

const getActiveUser = async (req, res) => {
  try {
    const userData = await UserAddress.find({
      isDelete: false,
      isActive: true,
    });
    res.status(200).json({ msg: `user active data`, data: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `active user data not found `, err });
  }
};

const getInactiveUser = async (req, res) => {
  try {
    const userData = await UserAddress.find({
      isDelete: false,
      isActive: false,
    });
    res.status(200).json({ msg: `user in active data`, data: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Inactive user data not found `, err });
  }
};

const updateActive = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const updateUser = await UserAddress.updateOne(
      { userId: req.query.userId },
      {
        $set: { isActive: rest.isActive },
      }
    );
    res
      .status(200)
      .json({ msg: `update user status ${rest.isActive}`, data: updateUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Inactive user data not found `, err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const updateUser = await UserAddress.updateOne(
      { userId: req.query.userId },
      {
        $set: { isDelete: true },
      }
    );
    res.status(200).json({ msg: `user data is delete ..`, data: updateUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Inactive user data not found `, err });
  }
};
module.exports = {
  userDetails,
  getUserAll,
  getDataById,
  getAllmembership,
  getActiveUser,
  getInactiveUser,
  updateuserdetails,
  updateActive,
  deleteUser,
};
