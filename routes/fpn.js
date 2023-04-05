const { default: axios } = require("axios");

const router = require("express").Router();

const getIPN = async () => {
  try {
    const res = await axios.get(`${process.env.FPN_URL}`);

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

getIPN();
