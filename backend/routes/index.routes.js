const router = require('express').Router();

router.get('/', (req, res) => {
    // req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
    // res.send("Hola, la página se ha visto:" + req.session.cuenta);
    res.send('Index');
});

router.get('/aboutus', (req, res) => {
    // req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
    // res.send("Hola, la página se ha visto:" + req.session.cuenta);
    res.send('About us');
});

router.get('/contactus', (req, res) => {
    // req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
    // res.send("Hola, la página se ha visto:" + req.session.cuenta);
    res.send('Contact us');
});

module.exports = router;