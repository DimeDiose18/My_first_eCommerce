const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://marlondelaroch3:1101@loopgame.p84mz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB is connected");
    return db;
  } catch (err) {
    return console.log(err);
  }
};

module.exports = connectDB;
