/*
Definicion de constantes y variables
Express: Con el creamos el servidor
Morgan: Verificar las peticiones http
App: Creacion del objeto de express.
nodemon: libreria de npm que me ayuda reiniciar el servidor sin tener que cancelarlo e inciarlo nuevamente.
cors = Importante para comunicar al servidor con el cliente
*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database');

//initializations
const app = express();

//Settings 
app.set('port', process.env.PORT || 8000); //process.env.PORT para el puerto que me brinda el servicio en la nube
app.set('jwtSecret', 'alozmean');

// Middleware (funciones que se ejecutan antes de llegar al servidor)
app.use(morgan('dev')); // dev = Es la manera en que visualizamos las peticiones en consola
app.use(express.json()); // Aqui se indica que cuando el cliente (Nav egador-FrontEnd) envie datos en formato .json el servidor los pueda entender
app.use(cors({origin: 'http://localhost:4200'})); //Aqui indicamos que el servidor puede comunicarse con el servidor cliente o con n servidores.

//Routes
app.use('/api/users',require('./routes/adminUsers.routes'));
app.use('',require('./routes/index.routes'));
app.use('/session/user',require('./routes/sessionUsers.routes'));
app.use('/rstate',require('./routes/publications.routes'));
app.use('/rstate',require('./routes/publicationsUser.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});