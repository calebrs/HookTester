require('dotenv').config();
const express = require("express");
const connectMongoDB = require("./config/mongodb.js");
const cors = require("cors");

const app = express();

// connect to mongo and pg
const db = connectMongoDB();

// init middleware
app.use(express.json({ extended: false }));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.get("/", (req, res) => {
  res.render('index'); // render frontpage here
});

// define routes
app.use("/api/test", require("./routes/api/test"));
app.use("/api/url", require("./routes/api/url"));
app.use("/r", require("./routes/receive_webhook"));
app.use("/inspect", require("./routes/inspect"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
