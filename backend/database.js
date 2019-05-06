const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const URI = 'mongodb://localhost/mean-crud';
//const URI = 'mongodb://172.17.0.2/mean-crud';

mongoose.connect(URI, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify:false })
    .then(db => console.log('DB is connected'))//Promesas
    .catch(err => console.error(err));

module.exports = mongoose.connection;//Exportar a otros archivos