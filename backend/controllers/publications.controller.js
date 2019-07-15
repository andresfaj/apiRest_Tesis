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
    publication.filename = req.file.filename;
    publication.path = '/images/'+ req.file.originalname;
    publication.mimetype = req.file.mimetype;
    publication.size = req.file.size;
    publication.typeProperty = req.body.typeProperty;
    publication.typeOffer = req.body.typeOffer;
    publication.price = parseInt(req.body.price);
    publication.negotiable = JSON.parse(req.body.negotiable);
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
    publication.interior.aircondi = JSON.parse( req.body.aircondi);
    publication.interior.jacuzzi = JSON.parse(req.body.jacuzzi);
    publication.interior.fwood = JSON.parse(req.body.fwood);
    publication.interior.cfloor = JSON.parse(req.body.cfloor);
    publication.interior.ikitchen = JSON.parse(req.body.ikitchen);
    publication.interior.akitchen = JSON.parse(req.body.akitchen);
    publication.exterior.pool = JSON.parse(req.body.pool);
    publication.exterior.ccondominium = JSON.parse(req.body.ccondominium);
    publication.exterior.pvisitors = JSON.parse(req.body.pvisitors);
    publication.careas.cliving = JSON.parse(req.body.cliving);
    publication.careas.fcourt = JSON.parse(req.body.fcourt);
    publication.careas.bcourt = JSON.parse(req.body.bcourt);
    publication.careas.tcourt = JSON.parse(req.body.tcourt);
    publication.careas.greenery = JSON.parse(req.body.greenery);
    publication.careas.chareas = JSON.parse(req.body.chareas);
    publication.sector.schoolnear = JSON.parse(req.body.schoolnear);
    publication.sector.unear = JSON.parse(req.body.unear);
    publication.sector.smarkets = JSON.parse(req.body.smarkets);
    publication.sector.parks = JSON.parse(req.body.parks);
    publication.sector.malls = JSON.parse(req.body.malls);
    publication.sector.ptransport = JSON.parse(req.body.ptransport);
    publication.sector.czone = JSON.parse(req.body.czone);
    publication.user = req.body.user;
    publication.disabled = true;
    console.log(publication);
    await publication.save();
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
