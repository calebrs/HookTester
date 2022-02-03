const express = require("express");
const router = express.Router();
const Url = require("../models/Url.js");
const Request = require("../models/Request.js");
const utils = require("../utils.js");

// @route POST receive_webhook
// @desc posts request data to custom url bin
// @access Public
router.all("/:url", async (req, res) => {
  try {
    const url = req.params.url
    const urlMongo = await utils.alreadyExist(url);
    if (!urlMongo) {
      res.status(404).send("URL doesn't exist");
    }
    // edit urlMongo
    // push back onto mongo
    const newRequest = new Request({
      method: req.method,
      source: req.originalUrl,
      timestamp: Date.now(),
      headers: utils.convertHeaders(req.rawHeaders),
      body: req.body,
      // raw: req.text(),
    })

    const success = await newRequest.save();
    if (!success) {
      res.status(500).send("Request save error!")
    }

    urlMongo.requests.push(newRequest);
    const updatedBin = await urlMongo.save();

    if (updatedBin) {
      res.status(200).send("Hook saved successfully");
    } else {
      res.status(500).send("Hook save error!")
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
