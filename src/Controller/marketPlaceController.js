const { MarketPlace } = require("../Model/marketPlaceModel");

const insertMarketPlace = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const insertData = await MarketPlace.create({
      marketPlaceImage: rest.marketPlaceImage,
      address: rest.address,
      city: rest.city,
      state: rest.state,
      country: rest.country,
      zipCode: rest.zipCode,
      email: rest.email,
    });
    res.status(200).json({ msg: `insert data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `market place not insert data`, err });
  }
};

const getAllMarketPlace = async (req, res) => {
  try {
    const allData = await MarketPlace.find({
      isDelete: false,
    });
    res
      .status(200)
      .json({ msg: `all market place data found...`, data: allData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all market place data not found `, err });
  }
};

const getMarketPlaceById = async (req, res) => {
  const { _id } = req.query;
  try {
    const getData = await MarketPlace.findOne({
      _id: _id,
      isDelete: false,
    });
    res
      .status(200)
      .json({ msg: `data found market place by id...`, data: getData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `market place not found by id ...`, err });
  }
};

const updateMarketPlaceById = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await MarketPlace.updateOne(
      {
        _id: _id,
        isDelete: false,
      },
      {
        $set: {
          marketPlaceImage: rest.marketPlaceImage,
          address: rest.address,
          city: rest.city,
          state: rest.state,
          country: rest.country,
          zipCode: rest.zipCode,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `data update by id successfully...`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `data not update by id ...`, err });
  }
};

const deleteMarketPlaceById = async (req, res) => {
  const { _id } = req.query;
  try {
    const deleteData = await MarketPlace.updateOne(
      {
        _id: _id,
        isDelete: false,
      },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete market place data successfully`, data: deleteData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `market place data not delete...`, err });
  }
};

module.exports = {
  insertMarketPlace,
  getAllMarketPlace,
  getMarketPlaceById,
  updateMarketPlaceById,
  deleteMarketPlaceById
};
