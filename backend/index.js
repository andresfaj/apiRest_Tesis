/*
Definicion de constantes y variables
Express: Con el creamos el servidor
Morgan: Verificar las peticiones http
App: Creacion del objeto de express.
nodemon: libreria de npm que me ayuda reiniciar el servidor sin tener que cancelarlo e inciarlo nuevamente.
cors = Importante para comunicar al servidor con el cliente
session = Importante para los inicios de sesión para que persistan, es decir, si un usuario se loggea y cierra el navegador y lo vuelve a abrir debe seguir logueado
*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const sessionMongo = require('connect-mongo')(session);
const flash = require('connect-flash');
const passport = require('passport');

//initializations
const app = express();
const connectDB = require('./database');
require('./config/passport');

//Settings 
app.set('port', process.env.PORT || 8000); //process.env.PORT para el puerto que me brinda el servicio en la nube

// Middleware (funciones que se ejecutan antes de llegar al servidor)
app.use(morgan('dev')); // dev = Es la manera en que visualizamos las peticiones en consola
app.use(express.json()); // Aqui se indica que cuando el cliente (Navegador-FrontEnd) envie datos en formato .json el servidor los pueda entender
app.use(cors({origin: 'http://localhost:4200'})); //Aqui indicamos que el servidor puede comunicarse con el servidor cliente
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'aloz',
    resave: false,
    saveUninitialized: false,
    store: new sessionMongo({
        mongooseConnection: connectDB,
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 


app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    next();
});

//Routes
app.use('/api/users',require('./routes/adminUsers.routes'));
app.use('',require('./routes/index.routes'));
app.use('/user',require('./routes/user.routes'));
app.use('/rstate',require('./routes/publications.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});