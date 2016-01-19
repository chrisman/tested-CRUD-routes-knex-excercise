var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  res.render('movies/index');
});

router.get('/new', function(req, res, next){
  res.render('movies/new');
});

module.exports = router;
