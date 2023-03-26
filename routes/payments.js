const router = require("express").Router();
const axios = require("axios");

// INITIATE PAYMENT
router.post("/payment", async (req, res) => {
  // GENERATE UNIQUE REFERENCE
  const generateRef = () => {
    let dt = new Date().getTime();
    let ref = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return ref;
  };

  const { phoneNumber, amount } = req.body;
  const data = {
    amount,
    contact: phoneNumber,
    username: "rutemose@gmail.com",
    api_key: process.env.API_KEY,
    transaction_reference: generateRef(),
    narrative: process.env.NARRATIVE,
    ipn_url: process.env.IPN_URL,
    fpn_url: process.env.FPN_URL,
  };

  // Define the headers to be sent in the POST request
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`, // Replace with your API key
  };

  try {
    // Make the POST request using Axios
    const response = await axios.post(`${process.env.PAYMENT_URL}`, data, {
      headers,
    });

    console.log(response); // Handle the response from the external API
    return res.status(201).send(response.data); // Send a success response to the client
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }

  // const newPayment = new Payment(req.body);
  // const savedPayment = await newPayment.save();
  // Exclude some sensitive parameters in the response body here
  // return res.status(201).json(savedPayment);
});

module.exports = router;
