/*
Definicion de constantes y variables
Express: Con el creamos el servidor
Morgan: Verificar las peticiones http
App: Creacion del objeto de express.
nodemon: libreria de npm que me ayuda reiniciar el servidor sin tener que cancelarlo e inciarlo nuevamente.
cors = Importante para comunicar al servidor con el cliente
Servicios para guardar archivos pesados en un servidor: (Hosting de archivos estaticos)
    -amazon s3
    -cloudinary
uuid = identificador unico universal
*/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database');
const multer  = require('multer');
const path = require('path');
const uuid = require('uuid/v4');


const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    //En esta ponemos el mismo nombre a la imagen que se obtiene del frontend
    //extname = extrae la ext de la imagen
    filename: (req, file, cb) => { 
        cb(null, uuid() + path.extname(file.originalname));
    }
});

//initializations
const app = express();

//Settings 
app.set('port', process.env.PORT || 8000); //process.env.PORT para el puerto que me brinda el servicio en la nube
app.set('jwtSecret', 'alozmean');

// Middleware (Funciones que se ejecutan antes de llegar a las rutas)
app.use(morgan('dev')); // dev = Es la manera en que visualizamos las peticiones en consola
app.use(express.json()); // Aqui se indica que cuando el cliente (Nav egador-FrontEnd) envie datos en formato .json el servidor los pueda entender
app.use(cors({origin: 'http://localhost:4200'})); //Aqui indicamos que el servidor puede comunicarse con el servidor cliente o con n servidores.
app.use(multer({
    storage: storage,
    dest: path.join(__dirname, 'public/images'),
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) => {
        const fileTypes =  /jpeg|png|jpg/; //Regular expresion in nodejs
        const mimeType = fileTypes.test(file.mimetype);
        const extImg = fileTypes.test(path.extname(file.originalname));
        if (mimeType && extImg) {
            return cb(null, true);
        }
        cb("Error: El archivo debe ser una imagen valida");
    }
}).fields([{name: 'image', maxCount:1 }, {name:'image2', maxCount:1}]));

//Routes
app.use('/api/users',require('./routes/adminUsers.routes'));
app.use('',require('./routes/index.routes'));
app.use('/session/user',require('./routes/sessionUsers.routes'));
app.use('/rstate',require('./routes/publications.routes'));
app.use('/rstate',require('./routes/publicationsUser.routes'));

//Static files
//Con esta linea se pueden ver la imagenes que están en el backend en el navegador
app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});