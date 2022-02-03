const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RequestSchema = require("./Request.js");

const UrlSchema = new Schema({
  url: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'request'
    },
  ],
});

module.exports = Url = mongoose.model("url", UrlSchema);
