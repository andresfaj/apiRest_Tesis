const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';
//const URI = 'mongodb://172.17.0.2/mean-crud';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))//Promesas
    .catch(err => console.error(err));

module.exports = mongoose;//Exportar a otros archivos