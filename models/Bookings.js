// Import mongoose ORM
const mongoose = require("mongoose");

// Create FarmerProduce model
const BookingsModel = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    dateOfTravel: {
      type: String,
      required: true,
    },
    timeOfTravel: {
      type: String,
      required: true,
    },
    numberOfPassengers: {
      type: Number,
      required: true,
    },
    seatNumber: {
      type: Number,
      // required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Bookings", BookingsModel);
