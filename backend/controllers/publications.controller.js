const { unlink } = require('fs-extra');
const path = require('path');
const modelPublications = require('../models/publications.model');
const publicationsController = {};

// Funcion que busca/trae todos los posts
publicationsController.getPublications = async  (req, res) => {
    const publications = await modelPublications.find();
    res.json(publications);
    // console.log(publications);
};

// Funcion que busca 1 post
publicationsController.getPublication = async (req, res) => {
    const publication = await modelPublications.findById(req.params.id);
    res.json(publication);
};

publicationsController.postPublication = async (req, res) => {
    console.log("publicacion", req.body);
    const publication = new modelPublications();
    if(typeof req.files['image2'] !== "undefined"){
        publication.originalnamevr = req.files['image2'][0].originalname;
        publication.filenamevr = req.files['image2'][0].filename;
        publication.pathvr = '/images/'+ req.files['image2'][0].filename;
        publication.mimetypevr = req.files['image2'][0].mimetype;
        publication.sizevr = req.files['image2'][0].size;
    }
    publication.originalname = req.files['image'][0].originalname;
    publication.filename = req.files['image'][0].filename;
    publication.path = '/images/'+ req.files['image'][0].filename;
    publication.mimetype = req.files['image'][0].mimetype;
    publication.size = req.files['image'][0].size;
    publication.typeProperty = req.body.typeProperty;
    publication.typeOffer = req.body.typeOffer;
    publication.price = parseInt(req.body.price);
    if(req.body.negotiable == 'true'){
        publication.negotiable = true;
    }else{
        publication.negotiable = false;
    }
    if(req.body.incluAdmin == 'true' && req.body.typeOffer == 'lease'){
        publication.incluAdmin = true;
        publication.adminValue = 0;        
    }else if(req.body.incluAdmin == 'false' && req.body.typeOffer == 'lease'){
        publication.incluAdmin = false;
        publication.adminValue = parseInt(req.body.adminValue);
    }else{
        publication.incluAdmin = false;
        publication.adminValue = 0;
    }
    publication.department =  req.body.department;
    publication.city = req.body.city;
    publication.neighborhood = req.body.neighborhood;
    publication.address = req.body.address;
    publication.area = parseInt(req.body.area);
    publication.antiquity = parseInt(req.body.antiquity);
    publication.rooms = parseInt(req.body.rooms);
    publication.bathrooms = parseInt(req.body.bathrooms);
    if(req.body.typeProperty == "Apartment"){
        publication.apartmentFloor = parseInt(req.body.apartmentFloor);
    }else{
        publication.apartmentFloor = 0;
    }
    publication.parking = parseInt(req.body.parking);
    publication.description = req.body.description;
    if(req.body.aircondi == 'true'){
        publication.interior.aircondi = true;
    }else{
        publication.interior.aircondi = false;
    }
    if(req.body.jacuzzi == 'true'){
        publication.interior.jacuzzi = true;
    }else{
        publication.interior.jacuzzi = false;
    }
    if(req.body.fwood == 'true'){
        publication.interior.fwood = true;
    }else{
        publication.interior.fwood = false;
    }
    if(req.body.cfloor == 'true'){
        publication.interior.cfloor = true;
    }else{
        publication.interior.cfloor = false;
    }
    if(req.body.ikitchen == 'true'){
        publication.interior.ikitchen = true;
    }else{
        publication.interior.ikitchen = false;
    }
    if(req.body.akitchen == 'true'){
        publication.interior.akitchen = true;
    }else{
        publication.interior.akitchen = false;
    }
    if(req.body.pool == 'true'){
        publication.exterior.pool = true;
    }else{
        publication.exterior.pool = false;
    }
    if(req.body.ccondominium == 'true'){
        publication.exterior.ccondominium = true;
    }else{
        publication.exterior.ccondominium = false;
    }
    if(req.body.pvisitors == 'true'){
        publication.exterior.pvisitors = true;
    }else{
        publication.exterior.pvisitors = false;
    }
    if(req.body.cliving == 'true'){
        publication.careas.cliving = true;
    }else{
        publication.careas.cliving = false;
    }
    if(req.body.fcourt == 'true'){
        publication.careas.fcourt = true;
    }else{
        publication.careas.fcourt = false;
    }
    if(req.body.bcourt == 'true'){
        publication.careas.bcourt = true;
    }else{
        publication.careas.bcourt = false;
    }
    if(req.body.tcourt == 'true'){
        publication.careas.tcourt = true;
    }else{
        publication.careas.tcourt = false;
    }
    if(req.body.greenery == 'true'){
        publication.careas.greenery = true;
    }else{
        publication.careas.greenery = false;
    }
    if(req.body.chareas == 'true'){
        publication.careas.chareas = true;
    }else{
        publication.careas.chareas = false;
    }
    if(req.body.schoolnear == 'true'){
        publication.careas.schoolnear = true;
    }else{
        publication.careas.schoolnear = false;
    }
    if(req.body.unear == 'true'){
        publication.careas.unear = true;
    }else{
        publication.careas.unear = false;
    }
    if(req.body.smarkets == 'true'){
        publication.careas.smarkets = true;
    }else{
        publication.careas.smarkets = false;
    }
    if(req.body.parks == 'true'){
        publication.careas.parks = true;
    }else{
        publication.careas.parks = false;
    }
    if(req.body.malls == 'true'){
        publication.careas.malls = true;
    }else{
        publication.careas.malls = false;
    }
    if(req.body.ptransport == 'true'){
        publication.careas.ptransport = true;
    }else{
        publication.careas.ptransport = false;
    }
    if(req.body.czone == 'true'){
        publication.careas.czone = true;
    }else{
        publication.careas.czone = false;
    }
    publication.user = req.body.user;
    publication.disabled = true;
    // console.log(publication);
    await publication.save();
    // console.log(req.body);
    res.json({
        status: "publication saved"
    });
};

publicationsController.updatePublication = async (req, res) => {
    var poriginalnamevr;
    var pfilenamevr;
    var ppathvr;
    var pmimetypevr;
    var psizevr;
    var poriginalname;
    var pfilename;
    var ppath;
    var pmimetype;
    var psize;
    var papartmentFloor;
    var stringValue = "true";
    if(typeof req.files['image2'] !== "undefined"){
        poriginalnamevr = req.files['image2'][0].originalname;
        pfilenamevr = req.files['image2'][0].filename;
        ppathvr = '/images/'+ req.files['image2'][0].filename;
        pmimetypevr = req.files['image2'][0].mimetype;
        psizevr = req.files['image2'][0].size;
    }else{
        poriginalnamevr = req.body.originalnamevr;
        pfilenamevr = req.body.filenamevr;
        ppathvr = req.body.pathvr;
        pmimetypevr = req.body.mimetypevr;
        psizevr = req.body.sizevr;
    }
    if(typeof req.files['image'] !== "undefined"){
        poriginalname = req.files['image'][0].originalname;
        pfilename = req.files['image'][0].filename;
        ppath = '/images/'+ req.files['image'][0].filename;
        pmimetype = req.files['image'][0].mimetype;
        psize = req.files['image'][0].size;
    }else{
        poriginalname = req.body.originalname; 
        pfilename = req.body.filename;
        ppath = req.body.path;
        pmimetype = req.body.mimetype;
        psize = req.body.size;
    }
    if(req.body.incluAdmin == 'true' && req.body.typeOffer == 'lease'){
        var pincluAdmin = true;
        var padminValue = 0;        
    }else if(req.body.incluAdmin == 'false' && req.body.typeOffer == 'lease'){
        var pincluAdmin = false;
        var padminValue = parseInt(req.body.adminValue);
    }else{
        var pincluAdmin = false;
        var padminValue = 0;
    }
    if(req.body.typeProperty == "Apartment"){
        papartmentFloor = parseInt(req.body.apartmentFloor);
    }else{
        papartmentFloor = 0;
    }
    const publication = {
        originalnamevr: poriginalnamevr,
        filenamevr: pfilenamevr,
        pathvr: ppathvr,
        mimetypevr: pmimetypevr,
        sizevr: psizevr,
        originalname: poriginalname,
        filename: pfilename,
        path: ppath,
        mimetype: pmimetype,
        size: psize,
        typeProperty: req.body.typeProperty,
        typeOffer: req.body.typeOffer,
        price: parseInt(req.body.price),
        negotiable: (stringValue === req.body.negotiable),
        incluAdmin: pincluAdmin,
        adminValue: padminValue,
        department:  req.body.department,
        city: req.body.city,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        area: parseInt(req.body.area),
        antiquity: parseInt(req.body.antiquity),
        rooms: parseInt(req.body.rooms),
        bathrooms: parseInt(req.body.bathrooms),
        apartmentFloor: papartmentFloor,
        parking: parseInt(req.body.parking),
        description: req.body.description,
        interior: {
            aircondi: (stringValue === req.body.aircondi),
            jacuzzi: (stringValue === req.body.jacuzzi),
            fwood: (stringValue === req.body.fwood),
            cfloor: (stringValue === req.body.cfloor),
            ikitchen: (stringValue === req.body.ikitchen),
            akitchen: (stringValue === req.body.akitchen),
        },
        exterior: {
            pool: (stringValue === req.body.pool),
            ccondominium: (stringValue === req.body.ccondominium),
            pvisitors: (stringValue === req.body.pvisitors)
        },
        careas: {
            cliving: (stringValue === req.body.cliving),
            fcourt: (stringValue === req.body.fcourt),
            bcourt: (stringValue === req.body.bcourt),
            tcourt: (stringValue === req.body.tcourt),
            greenery: (stringValue === req.body.greenery),
            chareas: (stringValue === req.body.chareas),
        },
        sector: {
            schoolnear: (stringValue === req.body.schoolnear),
            unear: (stringValue === req.body.unear),
            smarkets: (stringValue === req.body.smarkets),
            parks: (stringValue === req.body.parks),
            malls: (stringValue === req.body.malls),
            ptransport: (stringValue === req.body.ptransport),
            czone: (stringValue === req.body.czone)            
        },
        user: req.body.user,
        disabled: true
    }

    const { id } = req.params;
    await modelPublications.findByIdAndUpdate(id, {$set: publication});
    res.json({status: 'Publication updated'});
};

publicationsController.deletePublication = async (req, res) => {
    const post = await modelPublications.findByIdAndRemove(req.params.id);
    await unlink(path.resolve('./backend/public/' + post.path));
    await unlink(path.resolve('./backend/public/' + post.pathvr));
    res.json({status: 'Post deleted'});
};

module.exports = publicationsController;
