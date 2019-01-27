const User = require('../models/users');

const userController = {};

userController.getUsers = async (req, res) =>{
   const users = await User.find();
   res.json(users);
}

userController.getUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

userController.createUser = async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    });
};

userController.updateUser = async (req, res) =>{
    const user = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone

    }
    await User.findByIdAndUpdate(req.params.id, {$set: user});
    res.json({status: 'User updated'});
};

userController.deleteUser = async (req, res) =>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User deleted'});
};
module.exports = userController;