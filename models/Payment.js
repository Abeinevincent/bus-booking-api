// Import mongoose ORM
const mongoose = require("mongoose");

// Create FarmerProduce model
const BookingsModel = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    api_key: {
      type: Number,
      required: true,
    },
    transaction_reference: {
      type: Number,
      required: true,
    },
    narrative: {
      type: String,
      required: true,
    },
    ipn_url: {
      type: String,
      required: true,
    },
    fpn_url: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

// Export this model for import in the routes that will need to use it
module.exports = mongoose.model("Bookings", BookingsModel);
