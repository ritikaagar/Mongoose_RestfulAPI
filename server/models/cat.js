var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: String,
    color: String
}, { timestamps: true });
mongoose.model('Cat', CatSchema);