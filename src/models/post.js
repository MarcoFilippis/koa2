const mongoose = require('mongoose')

const Post = mongoose.Schema({
    title: String,
    description: String,
    txt: String 
})

module.exports = mongoose.model('Post', Post)