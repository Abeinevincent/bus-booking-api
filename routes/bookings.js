const router = require("express").Router();
const Bookings = require("../models/Bookings");
const { verifyToken } = require("./token");

// CREATE A BOOKING*******************************************************************
router.post("/", async (req, res) => {
  try {
    const newBooking = new Bookings(req.body);
    const savedBooking = await newBooking.save();
    return res.status(201).json(savedBooking);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// GET A SINGLE BOOKING ***************************************************************

// GET BOOKINGS ************************************************************************
router.get("/", verifyToken, async (req, res) => {
  try {
    const bookings = await Bookings.find();
    return res.status(200).json(bookings);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// EDIT/UPDATE A BOOKING ***************************************************************
router.put("/:id", async (req, res) => {
  try {
    const updatedBooking = await Bookings.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
        new: true,
      }
    );
    return res.status(200).json("Succefully updated a booking")
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
