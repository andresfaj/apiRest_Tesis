/*
Definicion de constantes y variables
Express: Con el creamos el servidor
Morgan: Verificar las peticiones http
App: Creacion del objeto de express
nodemon: libreria de npm que me ayuda reiniciar el servidor sin tener que cancelarlo e inciarlo nuevamente
cors = Importante para comunicar al servidor con el cliente
*/
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {mongoose} = require('./database');
const session = require('express-session');

//Settings 
app.set('port', process.env.PORT || 8000); //process.env.PORT para el puerto que me brinda el servicio en la nube

// Middleware (funciones que se ejecutan antes de llegar al servidor)
app.use(morgan('dev')); // dev = Es la manera es que visualizamos las peticiones en consola
app.use(express.json()); // express.json() = Este metodo ayuda para que el cliente (Navegador-FrontEnd) envie datos en formato .json para que el servidor(BackEnd) los pueda interpretar
//Aqui indicamos que el servidor puedo comunicarse con el servidor cliente
app.use(cors({origin: 'http://localhost:4200'}));
app.use(session({
    secret: 'aloz',
    resave: true,
    saveUninitialized: true
}))

//Routes
app.use('/api/users',require('./routes/users.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});