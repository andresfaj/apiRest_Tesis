/*
Definicion de constantes y variables
Express: Con el creamos el servidor
Morgan: Verificar las peticiones http
App: Creacion del objeto de express
*/
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {mongoose} = require('./database');

//Settings 
app.set('port', process.env.PORT || 8000);
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/api/users',require('./routes/users.routes'));
//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});