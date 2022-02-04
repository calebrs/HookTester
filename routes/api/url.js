const express = require("express");
const router = express.Router();
const Url = require("../../models/Url.js"); // schema
const utils = require("../../utils.js")

function customUrl() {
  const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }
  return getRanHex(7);
}

// @route POST api/url
// @desc posts webhook request to DB
// @access Public
router.post("/", async (req, res) => {
  try {
    let url = customUrl();
    while (await utils.alreadyExist(url)) {
      url = customUrl();
    }

    const newUrl = new Url({
      url,
      createdAt: new Date(),
      requests: [],
    })

    const newEntry = await newUrl.save();
    res.send({ url });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
