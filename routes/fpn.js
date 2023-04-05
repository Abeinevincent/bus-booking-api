const { default: axios } = require("axios");

const router = require("express").Router();

router.get("/failure", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.FPN_URL}`);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
});
