const { UserStall } = require("../Model/userStallModel");

const insertUserStall = async (req, res) => {
  const { ...rest } = req.body;
  console.log("rest", rest);
  try {
    const insertData = await UserStall.create({
      eventId: rest.eventId,
      marketId: rest.marketId,
      userId: rest.userId,
      stallId: rest.stallId,
    });
    res
      .status(200)
      .json({ msg: `insert UserStall data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserStall not insert data`, err });
  }
};

const getAllUserStall = async (req, res) => {
  try {
    const userStallData = await UserStall.aggregate([
      {
        $lookup: {
          from: "Stall",
          localField: "stallId",
          foreignField: "_id",
          as: "Stalldetails",
        },
      },
    ])

    res
      .status(200)
      .json({ msg: `all UserStall data found ..`, data: userStallData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all UserStall data not found ..`, err });
  }
};

const UserStallById = async (req, res) => {
  const { _id } = req.query;
  try {
    const userStallData = await UserStall.findOne({
      _id: _id,
      isDelete: false,
    });
    res
      .status(200)
      .json({ msg: `UserStall data found by id `, data: userStallData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserStall data not found by id ..`, err });
  }
};

const updateUserStall = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await UserStall.updateOne(
      { _id: _id, isDelete: false },
      {
        $set: {
          eventId: rest.eventId,
          marketId: rest.marketId,
          userId: rest.userId,
          stallId: rest.stallId,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `UserStall data update successfully..`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `UserStall data not update by id `, err });
  }
};

const deleteUserStall = async (req, res) => {
  const { _id } = req.query;

  try {
    const deleteData = await UserStall.updateOne(
      { _id: _id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete UserStall data successfully..`, data: deleteData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: ` not delete UserStall data successfully...`, err });
  }
};

module.exports = {
  insertUserStall,
  getAllUserStall,
  UserStallById,
  updateUserStall,
  deleteUserStall,
};
