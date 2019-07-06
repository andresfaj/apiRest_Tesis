const modelPublications = require('../models/publications.model');
const publicationsController = {};

publicationsController.getPublications = async (req, res) => {
    const publications = await modelPublications.find();
    res.json(publications);
    // console.log(publications);
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
        name: req.body.name,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
        description: req.body.description,
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
