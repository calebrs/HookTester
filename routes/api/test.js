const express = require("express");
const router = express.Router();

// @route GET api/test
// @desc test route
// @access Public
router.get("/", (req, res) => {
  try {
    res.send("Test Route Works!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
