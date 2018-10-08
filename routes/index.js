var express = require('express');
var Kitsu = require('kitsu');
var api = new Kitsu({baseUrl: 'https://kitsu.io/api/edge'});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    api.get('/trending/anime')
    .then(({ data }) => {
        res.render('index', { title: 'Koshin', data: data });
    })
    .catch(err => {
        console.log(err);
    })


});

module.exports = router;
