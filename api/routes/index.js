var express = require('express');
var router = express.Router();


const paths = {
  teQuiero: "/"
}


router.get(paths.teQuiero, function(req, res, next) {
  res.render('index', { title: 'Te Quiero' });
});

module.exports = router;
