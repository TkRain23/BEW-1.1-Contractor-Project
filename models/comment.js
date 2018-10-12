// makes it requrie mongoose
const mongoose = require('mongoose');
module.exports = mongoose.model('Comment', {
    comment: String,
    showId: String
})
