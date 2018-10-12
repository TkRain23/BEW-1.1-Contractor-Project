const Comment = require('../models/comment')
const express = require('express')
const router = express.Router()
router.post('/', (req, res) => {
    console.log(req.body)
    Comment.create(req.body)
    .then(comment => {
        res.status(200).send(comment)
    })
    .catch(err => {
        console.log(err)
        res.status(502).send('Could not create comment')
    })
})

module.exports = router;
