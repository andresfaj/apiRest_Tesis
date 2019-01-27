const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true}
});

module.exports = mongoose.model('Users', userSchema);//Modelo de dato de mongoose, los datos de userSchema se guardan en la tabla 'Users' 
