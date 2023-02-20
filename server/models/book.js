let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);