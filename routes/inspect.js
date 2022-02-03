const express = require("express");
const router = express.Router();
const Url = require("../models/Url.js");
const Request = require("../models/Request.js");
const utils = require("../utils.js");

// @route GET /inspect/:url
// @desc get webhooks at the url
// @access Public
router.get("/:url", async (req, res) => {
  try {
    const url = req.params.url
    const urlMongo = await utils.alreadyExist(url);
    if (!urlMongo) {
      res.status(404).send("URL doesn't exist");
    }
    // pull from schema
    // urlMongo.requests == the ids
    const requests = await urlMongo.populate('requests');
    res.json(requests)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
