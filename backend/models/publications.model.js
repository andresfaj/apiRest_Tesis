const mongoose = require('mongoose');
const { Schema } = mongoose;

const publicationSchema = new Schema({
    originalnamevr: {type: String, required: true},
    filenamevr: {type: String, required:true},
    pathvr: {type: String, required:true},
    mimetypevr: {type: String},
    sizevr: {type: Number},
    originalname: {type: String, required: true},
    filename: {type: String, required:true},
    path: {type: String, required:true},
    mimetype: {type: String},
    size: {type: Number},
    typeProperty: {type: String, required: true},
    typeOffer: {type: String, required: true},
    price: {type: Number, required: true},
    negotiable: {type: Boolean, default: false},
    incluAdmin: {type: Boolean, default: false},
    adminValue: {type: Number, default: null},
    department: {type: String, required: true},
    city: {type: String, required: true},
    neighborhood: {type: String, required: true},
    address: {type: String, required: true},
    area: {type: Number, required: true},
    antiquity: {type: Number, required: true},
    rooms: {type: Number, required: true},
    bathrooms: {type: Number, required: true},
    apartmentFloor: {type: Number, default: null},
    parking: {type: Number, required: true},
    description: {type: String, required: true},
    interior: {
        aircondi: {type: Boolean, default: false},
        jacuzzi: {type: Boolean, default: false},
        fwood: {type: Boolean, default: false},
        cfloor: {type: Boolean, default: false},
        ikitchen: {type: Boolean, default: false},
        akitchen: {type: Boolean, default: false},
    },
    exterior: {
        pool: {type: Boolean, default: false},
        ccondominium: {type: Boolean, default: false},
        pvisitors: {type: Boolean, default: false},
    },
    careas: {
        cliving: {type: Boolean, default: false},
        fcourt: {type: Boolean, default: false},
        bcourt: {type: Boolean, default: false},
        tcourt: {type: Boolean, default: false},
        greenery: {type: Boolean, default: false},
        chareas: {type: Boolean, default: false},        
    },
    sector: {
        schoolnear: {type: Boolean, default: false},   
        unear: {type: Boolean, default: false},   
        smarkets: {type: Boolean, default: false},   
        parks: {type: Boolean, default: false},   
        malls: {type: Boolean, default: false},   
        ptransport: {type: Boolean, default: false},   
        czone: {type: Boolean, default: false},   

    },
    user: {type: String, required: true},
    disabled: {type: Boolean, default: true},
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('publications', publicationSchema);

