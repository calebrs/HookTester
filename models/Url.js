const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  url: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "url",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  requests: [
    {
      method: {
        type: String,
      },
      host: {
        type: String,
      },
      path: {
        type: String,
      },
      created: {
        type: Date,
      },
      parameters: {
        type: String,
      },
      headers: {
        type: Object,
      },
      body: {
        type: String,
      },
    },
  ],
});

module.exports = Url = mongoose.model("url", PostSchema);
