const { Stall } = require("../Model/stallModel");

const insertStall = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const insertData = await Stall.create({
      marketId: rest.marketId,
      eventId: rest.eventId,
      email: rest.email,
      stallType: rest.stallType,
      stallImage: rest.stallImage,
      price: rest.price,
    });
    res
      .status(200)
      .json({ msg: `insert Stall data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Stall not insert data`, err });
  }
};

const getAllStall = async (req, res) => {
  try {
    const stallData = await Stall.find({ isDelete: false });
    res.status(200).json({ msg: `all Stall data found ..`, data: stallData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all Stall data not found ..`, err });
  }
};

const getStallById = async (req, res) => {
  const { _id } = req.query;
  try {
    const stallData = await Stall.findOne({ _id: _id, isDelete: false });
    res.status(200).json({ msg: `Stall data found by id `, data: stallData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Stall data not found by id ..`, err });
  }
};

const updateStallById = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await Stall.updateOne(
      { _id: _id, isDelete: false },
      {
        $set: {
            marketId: rest.marketId,
            eventId: rest.eventId,
            email: rest.email,
            stallType: rest.stallType,
            stallImage: rest.stallImage,
            price: rest.price,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `Stall data update successfully..`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Stall data not update by id `, err });
  }
};

const deleteStallData = async (req, res) => {
  const { _id } = req.query;

  try {
    const deleteData = await Stall.updateOne(
      { _id: _id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete Stall data successfully..`, data: deleteData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: ` not delete Stall data successfully...`, err });
  }
};

module.exports = {
    insertStall,
    getAllStall,
    getStallById,
    updateStallById,
    deleteStallData
};
