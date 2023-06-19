const {Event} =require('../Model/eventModel')

const insertEvent = async (req, res) => {
    const { ...rest } = req.body;
    try {
      const insertData = await Event.create({
        eventImage: rest.eventImage,
        marketId:rest.marketId,
        email: rest.email,
        date:rest.date,
        address:rest.address,
        city:rest.city,
        state:rest.state,
        country:rest.country,
        zipCode:rest.zipCode
      });
      res
        .status(200)
        .json({ msg: `insert Event data successfully`, data: insertData });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: `Event not insert data`, err });
    }
  };
  
  const getAllEvent = async (req, res) => {
    try {
      const eventData = await Event.find({ isDelete: false });
      res.status(200).json({ msg: `all Event data found ..`, data: eventData });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: `all Event data not found ..`, err });
    }
  };
  
  const getEventById = async (req, res) => {
    const { _id } = req.query;
    try {
      const eventData  = await Event.findOne({ _id: _id, isDelete: false });
      res.status(200).json({ msg: `Event data found by id `, data: eventData  });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: `Event data not found by id ..`, err });
    }
  };
  
  const updateEventById = async (req, res) => {
    const { _id } = req.query;
    const { ...rest } = req.body;
    try {
      const updateData = await Event.updateOne(
        { _id: _id, isDelete: false },
        {
          $set: {
            eventImage: rest.eventImage,
            marketId:rest.marketId,
            email: rest.email,
            date:rest.date,
            address:rest.address,
            city:rest.city,
            state:rest.state,
            country:rest.country,
            zipCode:rest.zipCode
          },
        }
      );
      res
        .status(200)
        .json({ msg: `Event data update successfully..`, data: updateData });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: `Event data not update by id `, err });
    }
  };
  
  const deleteEventData = async (req, res) => {
    const { _id } = req.query;
 
    try {
      const deleteData = await Event.updateOne(
        { _id: _id },
        {
          $set: {
            isDelete: true,
          },
        }
      );
      res
        .status(200)
        .json({ msg: `delete Event data successfully..`, data: deleteData });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: ` not delete Event data successfully...`, err });
    }
  };

  module.exports ={
    insertEvent,
    getAllEvent,
    getEventById,
    updateEventById,
    deleteEventData
  }