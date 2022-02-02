require('dotenv').config();
const express = require("express");
const connectMongoDB = require("./config/mongodb.js");

const app = express();

// connect to mongo and pg
const db = connectMongoDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running"); // render frontpage here
});

// define routes
app.use("/api/test", require("./routes/api/test"));
app.use("/api/url", require("./routes/api/url"));
// app.use("/api/inspect", require("./routes/api/url"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
