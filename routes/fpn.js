const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    console.log("FPN came successfully");
    console.log(req.body);
    // const { test, transaction_reference } = req.body;
    return res.status(200).json(req.body);
    // ttddd
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
