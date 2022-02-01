const express = require("express");
// const connectDB = require("./config/db.js");

const app = express();

// connect to mongo database
// connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

// define routes
app.use("/api/test", require("./routes/api/test"));
// app.use("api/geturl", require("./routes/api/geturl"));
// app.use("api/newurl", require("./routes/api/newurl"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});