const { default: axios } = require("axios");

const router = require("express").Router();

router.post("/failure", async (req, res) => {
  try {
    const response = await axios.post(`${process.env.FPN_URL}`, {});
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
