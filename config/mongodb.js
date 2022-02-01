const mongoose = require("mongoose");
const config = require("config");
const url = `mongodb+srv://hooktesteradmin:${process.env.PASSWORD}@cluster0.ujwnw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
