var express = require('express');
var router = express.Router();
// var kitsu = require('../lib/kitsu');
var kitsu = require('node-kitsu');
const Comment = require('../models/comment')
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

router.get('/:showName', function(req, res, next)
{
    console.log(req.params)
    kitsu.searchAnime(req.params.showName, 0)
    .then(results => {
        Comment.find({showId: results[0].id})
        .then(comments => {
            res.render('anime-show', {title: results[0].attributes.titles.en, result: results[0], comments: comments})
        })

    })
    .catch(err => {
        console.log(err);
        res.status(404).send();
    })
})

module.exports = router;
