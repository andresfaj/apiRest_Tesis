const modelPublications = require('../models/publications.model');
const publicationsController = {};

publicationsController.getPublications = async (req, res) => {
    const publications = await modelPublications.find();
    res.json(publications);
};

publicationsController.postPublication = async (req, res) => {
    const publication = new modelPublications(req.body);
    await publication.save();
    req.flash('msg1', 'Las publicación se creó con éxito');
    // console.log(msg1);
    res.json({
        status: "publication saved"
    });
};

module.exports = publicationsController;
