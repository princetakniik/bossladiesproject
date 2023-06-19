const { UserSeat } = require("../Model/userSeatModel");

const insertUserSeat = async (req, res) => {
  const { ...rest } = req.body;
  console.log('rest',rest);
  try {
    const insertData = await UserSeat.create({
      eventId: rest.eventId,
      marketId: rest.marketId,
      userId: rest.userId,
      seatId: rest.seatId,
    });
    res
      .status(200)
      .json({ msg: `insert UserSeat data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserSeat not insert data`, err });
  }
};

const getAllUserSeat = async (req, res) => {
  try {
    const userSeatData = await UserSeat.find({ isDelete: false });
    res
      .status(200)
      .json({ msg: `all UserSeat data found ..`, data: userSeatData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all UserSeat data not found ..`, err });
  }
};

const UserSeatById = async (req, res) => {
  const { _id } = req.query;
  try {
    const userSeatData = await UserSeat.findOne({ _id: _id, isDelete: false });
    res
      .status(200)
      .json({ msg: `UserSeat data found by id `, data: userSeatData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserSeat data not found by id ..`, err });
  }
};

const updateUserSeat = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await UserSeat.updateOne(
      { _id: _id, isDelete: false },
      {
        $set: {
          eventId: rest.eventId,
          marketId: rest.marketId,
          userId: rest.userId,
          seatId: rest.seatId,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `UserSeat data update successfully..`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserSeat data not update by id `, err });
  }
};

const deleteUserSeat = async (req, res) => {
  const { _id } = req.query;

  try {
    const deleteData = await UserSeat.updateOne(
      { _id: _id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete UserSeat data successfully..`, data: deleteData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: ` not delete UserSeat data successfully...`, err });
  }
};

module.exports = {
  insertUserSeat,
  getAllUserSeat,
  UserSeatById,
  updateUserSeat,
  deleteUserSeat,
};
