const { Seat } = require("../Model/seatModel");

const insertSeat = async (req, res) => {
  const { ...rest } = req.body;
  console.log('rest',rest);
  try {
    const insertData = await Seat.create({
      marketId: rest.marketId,
      eventId: rest.eventId,
      email: rest.email,
      seatType: rest.stallType,
      seatImage: rest.stallImage,
      price: rest.price,
    });
    res
      .status(200)
      .json({ msg: `insert Seat data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Seat not insert data`, err });
  }
};

const getAllSeat = async (req, res) => {
  try {
    const seatData = await Seat.find({ isDelete: false });
    res.status(200).json({ msg: `all Seat data found ..`, data: seatData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all Seat data not found ..`, err });
  }
};

const getSeatById = async (req, res) => {
  const { _id } = req.query;
  try {
    const seatData = await Seat.findOne({ _id: _id, isDelete: false });
    res.status(200).json({ msg: `Seat data found by id `, data: seatData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Seat data not found by id ..`, err });
  }
};

const updateSeatById = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await Seat.updateOne(
      { _id: _id, isDelete: false },
      {
        $set: {
            marketId: rest.marketId,
      eventId: rest.eventId,
      email: rest.email,
      seatType: rest.stallType,
      seatImage: rest.stallImage,
      price: rest.price,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `Seat data update successfully..`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Seat data not update by id `, err });
  }
};

const deleteSeatData = async (req, res) => {
  const { _id } = req.query;

  try {
    const deleteData = await Seat.updateOne(
      { _id: _id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete Seat data successfully..`, data: deleteData });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: ` not delete Seat data successfully...`, err });
  }
};

module.exports = {
    insertSeat,
    getAllSeat,
    getSeatById,
    updateSeatById,
    deleteSeatData
};
