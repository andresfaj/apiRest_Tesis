/*
    Este archivo solo contiene funciones
    Dato: Las promesas son la mejora de los callBack en JS
    - req.body: Variable que obtiene datos del cuerpo enviados por el cliente(Navegador-FrontEnd)
    - req.params.id: Varible que obtiene datos de la url, en este caso el id == const { id } = req.params;
*/
const modelUser = require('../models/users.model');
const adminuserController = {};

//Funcion que busca todos los usuarios registrados
adminuserController.getUsers = async (req, res) => {
    const users = await modelUser.find();
    res.json(users);
 }

// Funcion que busca 1 usuario
adminuserController.getUser = async (req, res) => {
    const user = await modelUser.findById(req.params.id);
    res.json(user);
};

//Funcion que crea/registra 1 usuario
adminuserController.createUser = async (req, res) => {
    const user = new modelUser(req.body);
    // user.password = await user.encryptPassword(user.password);
    console.log(user);
    await user.save();
    res.json({
        'status': 'User saved'
    });
};

//Funcion que actualiza 1 usuario
adminuserController.updateUser = async (req, res) => {
    const user = {
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }
    // console.log("DESDE EL BACKEND usuario recibido:",user);
    const { id } = req.params;
    await modelUser.findByIdAndUpdate(id, {$set: user});
    res.json({status: 'User updated'});
};
 
//Funcion que elimina 1 usuairo
adminuserController.deleteUser = async (req, res) => {
    await modelUser.findByIdAndRemove(req.params.id);
    res.json({status: 'User deleted'});
};

module.exports = adminuserController;