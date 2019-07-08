const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now }
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //Genera un Hash, este caso lo aplicamos 10 veces
    const hash = bcrypt.hash(password, salt); //Se obtiene contraseña cifrada
    return hash;
};

//metodo para comparar la contraseña de signin con la de la DB
userSchema.methods.matchPassword = async function (password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = mongoose.model('Users', userSchema);//Modelo de dato de mongoose, los datos de userSchema se guardan en la tabla 'Users' 
