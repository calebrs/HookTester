const express = require("express");
const router = express.Router();
const Url = require("../../models/Url.js"); // schema

function customUrl() {
  const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }
  return getRanHex(7)
}

async function alreadyExist(url) { // move to separate file later
  return await Url.findOne({ url }).exec();
}

// @route POST api/url
// @desc posts webhook request to DB
// @access Public
router.post("/", async (req, res) => {
  try {
    let url = customUrl();
    while (await alreadyExist(url)) {
      url = customUrl();
    }

    const newUrl = new Url({
      url,
      createdAt: Date.now(),
      requests: [],
    })

    const newEntry = await newUrl.save();
    res.json(newEntry); // response to front end
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/url
// @desc gets all webhook requests made to Url
// @access Public

// get request to base/:url/inspect
// make request to mongoDB using :url
// populate and render the page


module.exports = router;
