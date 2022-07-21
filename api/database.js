const mongoose = require("mongoose");
const { config } = require("dotenv");
config();
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;
const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@loopgame.p84mz.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`
    );
    console.log("DB is connected");
    return db;
  } catch (err) {
    return console.log(err);
  }
};

module.exports = connectDB;
