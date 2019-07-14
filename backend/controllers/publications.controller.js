const modelPublications = require('../models/publications.model');
const publicationsController = {};

// Funcion que busca/trae todos los posts
publicationsController.getPublications = async (req, res) => {
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
    const publication = new modelPublications(req.body);
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
