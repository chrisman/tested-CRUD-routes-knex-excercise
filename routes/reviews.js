var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* Movies Routes Go Here. */

router.get('/:movie_id/reviews', function(req, res, next){
  res.send('200');
});

router.get('/:movie_id/reviews/new', function(req, res, next){
  res.send('200');
});

router.post('/:movie_id/reviews', function(req, res, next){
  res.send('200');
});

router.get('/:movie_id/reviews/:id', function(req, res, next){
  res.send('200');
});

router.get('/:movie_id/reviews/:id/edit', function(req, res, next){
  res.send('200');
});

router.post('/:movie_id/reviews/:id', function(req, res, next){
  res.send('200');
});

router.post('/:movie_id/reviews/:id/delete', function(req, res, next){
  res.send('200');
});


module.exports = router;
