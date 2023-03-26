const router = require("express").Router();

// INITIATE PAYMENT
router.post("/", async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    const savedPayment = await newPayment.save();
    // Exclude some sensitive parameters in the response body here
    return res.status(201).json(savedPayment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
