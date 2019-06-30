const mongoose = require('mongoose');
const { Schema } = mongoose;

const publicationSchema = new Schema({
    name: {type: String, required: true},
    neighborhood: {type: String, required: true},
    address: {type: String, required: true},
    bathrooms: {type: Number, required: true},
    bedrooms: {type: Number, required: true},
    description: {type: String, required: true},
    user: {type: String},
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('publications', publicationSchema);

