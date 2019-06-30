const modelPublications = require('../models/publications.model');
const publicationsControllerUser = {};

publicationsControllerUser.getPublicationsUser = async (req, res) => {
    const publications = await modelPublications.find({user: req.params.user});
    res.json(publications);
};

module.exports = publicationsControllerUser;
