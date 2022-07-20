var express = require('express');
var router = express.Router();


const paths = {
  games: "/"
}


router.get(paths.games, function(req, res, next) {
  res.render('index', { title: 'Te Quiero' });
});

module.exports = router;
