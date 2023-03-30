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
      type: Array,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    ticketNumber: {
      type: Number,
    },
    busNumber: {
      type: String,
    },
    paymentStatus: {
      type: String,
    },
    transactionRef: {
      type: String,
    },
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Bookings", BookingsModel);
