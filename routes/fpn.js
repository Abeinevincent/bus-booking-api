const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    console.log(req);
    console.log("FPN came successfully")
    const { test } = req.body;
    return res.status(200).json(test);
    // ttddd
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
