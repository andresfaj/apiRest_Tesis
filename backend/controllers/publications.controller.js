const modelPublications = require('../models/publications.model');
const publicationsController = {};

publicationsController.getPublications = async (req, res) => {
    const publications = await modelPublications.find();
    res.json(publications);
    console.log(publications);
};

publicationsController.postPublication = async (req, res) => {
    const publication = new modelPublications(req.body);
    await publication.save();
    res.json({
        status: "publication saved"
    });
};

module.exports = publicationsController;
