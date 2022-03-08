const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  method: {
    type: String,
  },
  source: { // req.url
    type: String,
  },
  timestamp: {
    type: Date,
  },
  headers: {
    type: Object,
  },
  body: {
    type: Object,
  },
  // raw: {
  //   type: String // JSON string
  // }
});

module.exports = Request = mongoose.model("request", RequestSchema);
