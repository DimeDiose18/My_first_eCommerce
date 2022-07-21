var express = require("express");
var router = express.Router();
var axios = require("axios");
var AllGames = require("./../models/AllGames");

const paths = {
  getAllGames: "/",
};

router.get(paths.getAllGames, async function (req, res, next) {
  const data = await AllGames.find()
  res.send(data);
});

module.exports = router;
