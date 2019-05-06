const mongoose = require('mongoose');
const { Schema } = mongoose;

const publicationSchema = new Schema({
    name: {type: String, required: true},
    neighborhood: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('publications', publicationSchema);

