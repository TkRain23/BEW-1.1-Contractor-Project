var express = require('express');
var router = express.Router();
// var kitsu = require('../lib/kitsu');
var kitsu = require('node-kitsu');

router.get('/', function(req, res, next)
{
    console.log(req.query.query);
    kitsu.searchAnime(req.query.query, 0)
    .then(results => {
        console.log(results)
        res.status(200).send(results);
    })
    .catch(err => {
        console.log(err);
        res.status(404).send();
    })
})

module.exports = router;
