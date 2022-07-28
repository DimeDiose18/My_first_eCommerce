const mongoose = require("mongoose");

const AllGamesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    short_description: {
      type: String,
      required: false,
    },
    game_url: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      required: false,
    },
    platform: {
      type: String,
      required: false,
    },
    publisher: {
      type: String,
      required: false,
    },
    developer: {
      type: String,
      required: false,
    },
    release_date: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllGames", AllGamesSchema);