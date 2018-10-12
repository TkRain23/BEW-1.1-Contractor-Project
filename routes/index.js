var express = require('express');
var Kitsu = require('kitsu');
var api = new Kitsu({baseUrl: 'https://kitsu.io/api/edge'});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Sensaku'});

});


module.exports = router;
