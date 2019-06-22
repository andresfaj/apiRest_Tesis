
const modelUser = require('../models/users.model');
const jwt = require('jsonwebtoken');

const sessionuserController = {};

//Funcion que valida login
sessionuserController.validateLogin = async (req, res) => {
    if (req.body){
        const user = new modelUser(req.body);
        await modelUser.findOne({email: user.email, password: user.password}, function (err, acceso) {
            if(err) return console.log(err);
            if(acceso !== null){
                const accessToken = jwt.sign({user}, req.app.get('jwtSecret'));
                const dataUser = {
                    id: acceso.id,
                    name: acceso.name,
                    lastname: acceso.lastName,
                    phone: acceso.phone,
                    email: acceso.email,
                    accessToken: accessToken                    
                }
                res.json({ dataUser });
            }else{
                res.json({
                    errorMessage: 'user and password incorrect'
                });
            }
        });

    } else {
        res.json({
            errorMessage: 'No hay datos'
        });
    }
}

module.exports = sessionuserController;