const nodemailer = require('nodemailer');

const formularioController = {}
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'contactalozhome@gmail.com',
    pass: '10s0tr0s2'
    }
})

formularioController.sendMail = async (req, res) => {
    
    var mailOptions = {
        from: req.body.email,
        to: 'contactalozhome@gmail.com',
        name:  req.body.name,
        subject: 'Client Message',
        // text: req.body.comment,
        html: "<h4>Hola mi nombre es:</h4>" +
                req.body.name + "<br>" +
                "<b><p>Mi correo es:</p></b>" + req.body.email + "<br>" +
                "<b><p>Mensaje:</p></b> <br>" +
                req.body.comment
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log(err)
        else
        console.log(info);
        res.json({
            status: 'ok'
        })
    });  
}

module.exports = formularioController;