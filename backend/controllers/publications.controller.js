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
    const publication = new modelPublications();
    publication.originalnamevr = req.files['image2'][0].originalname;
    publication.filenamevr = req.files['image2'][0].filename;
    publication.pathvr = '/images/'+ req.files['image2'][0].filename;
    publication.mimetypevr = req.files['image2'][0].mimetype;
    publication.sizevr = req.files['image2'][0].size;
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
    console.log(publication);
    await publication.save();
    // console.log(req.body);
    res.json({
        status: "publication saved"
    });
};

publicationsController.updatePublication = async (req, res) => {
    const publication = {
        typeProperty: req.body.typeProperty,
        typeOffer: req.body.typeOffer,
        price: req.body.price,
        negotiable: req.body.negotiable,
        incluAdmin: req.body.incluAdmin,
        adminValue: req.body.adminValue,
        department: req.body.department,
        city: req.body.city,        
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        area: req.body.area,
        antiquity: req.body.antiquity,        
        rooms: req.body.rooms,
        bathrooms: req.body.bathrooms,
        apartmentFloor: req.body.apartmentFloor,
        parking: req.body.parking,
        description: req.body.description,
        interior: {
            aircondi: req.body.interior.aircondi,
            jacuzzi: req.body.interior.jacuzzi,
            fwood: req.body.interior.fwood,
            cfloor: req.body.interior.cfloor,
            ikitchen: req.body.interior.ikitchen,
            akitchen: req.body.interior.akitchen
        },
        exterior: {
            pool: req.body.exterior.pool,
            ccondominium: req.body.exterior.ccondominium,
            pvisitors: req.body.exterior.pvisitors
        },
        careas: {
            cliving: req.body.careas.cliving,
            fcourt: req.body.careas.fcourt,
            bcourt: req.body.careas.bcourt,
            tcourt: req.body.careas.tcourt,
            greenery: req.body.careas.greenery,
            chareas: req.body.careas.chareas,
        },
        sector: {
            schoolnear: req.body.sector.schoolnear,
            unear: req.body.sector.unear,
            smarkets: req.body.sector.smarkets,
            parks: req.body.sector.parks,
            malls: req.body.sector.malls,
            ptransport: req.body.sector.ptransport,
            czone: req.body.sector.czone            
        },
        user: req.body.user
    }

    const { id } = req.params;
    await modelPublications.findByIdAndUpdate(id, {$set: publication});
    res.json({status: 'Publication updated'});
};

publicationsController.deletePublication = async (req, res) => {
    await modelPublications.findByIdAndRemove(req.params.id);
    res.json({status: 'Post deleted'});
};

module.exports = publicationsController;
