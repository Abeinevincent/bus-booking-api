const router = require("express").Router();
const Bookings = require("../models/Bookings");

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

// EDIT/UPDATE A BOOKING ***************************************************************

module.exports = router;
