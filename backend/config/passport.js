/*

Estructura del done(error, usuario, mensaje)

*/
const passport = require('passport');
const localStrategy =require('passport-local').Strategy;

const modelUser = require('../models/users.model');

passport.use(new localStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await modelUser.findOne({email: email});
    if(!user){
        //callback sirve para terminar el proceso de autenticacion
        return done(null, false, {message: 'Not user found.'});      
    } else {
      const match = await modelUser.matchPassword(password);
      if(match){
          return done(null, user);
      }else{
          return done(null, false, {message: 'Incorrect Password'});
      }
    }
}));

//Aqui vamos almacenar el usuario en una sesión cuando se loguea
passport.serializeUser((user, done) => {
    done(null, user.id)
});

//
passport.deserializeUser(() =>{
    modelUser.findById(id, (err, user) => {
        done(err, user);        
    });
});