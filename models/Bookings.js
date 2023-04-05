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
      type: String,
      default: "N/A"
    },
    busNumber: {
      type: String,
      default: "N/A"
    },
    paymentStatus: {
      type: String,
      default: "N/A"
    },
    transactionRef: {
      type: String,
      default: "N/A"
    },
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Bookings", BookingsModel);
