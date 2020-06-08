const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    body  : String,
    date  : Date
});

const articleSchema = new Schema({
    title: {type: String, required: true},
    article: {type: String, required: true},
    authorname: {type: String, required: true},
    datePosted: Date,
    category: {type: String, required: true},
    tags: [{type: String}],
    likes: Number,
    comments: [comment]
});


const Comments = mongoose.model('Comments', comment)

const Articles = mongoose.model('Articles', articleSchema);


module.exports = Articles, Comments