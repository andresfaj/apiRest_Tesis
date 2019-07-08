
const modelUser = require('../models/users.model');
const jwt = require('jsonwebtoken');

const sessionuserController = {};

//Funcion que valida login
sessionuserController.validateLogin = async (req, res) => {
    if (req.body){
        const user = new modelUser(req.body);
        await modelUser.findOne({email: user.email}, async function (err, data){
            if (err) return console.log(err);
            if(data !== null){
                var confirmPassword = await user.matchPassword(user.password, data.password);
                if (confirmPassword == true){
                    const accessToken = jwt.sign({user}, req.app.get('jwtSecret'));
                    const dataUser = {
                        id: data.id,
                        name: data.name,
                        lastname: data.lastName,
                        phone: data.phone,
                        email: data.email,
                        accessToken: accessToken                    
                    }
                    res.json({ dataUser });
                }else{
                    res.json({
                        errorMessage: 'user and password incorrect'
                    });                    
                }       
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