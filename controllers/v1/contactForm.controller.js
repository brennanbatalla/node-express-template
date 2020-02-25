const express = require('express')
    , router = express.Router(),
    contactUsService = require("../../services/contactUs");

router.post('/',  (req, res) => {

    let body = req.body;

    let model = {
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true
    };

    for (let key in body) {
        if (!body.hasOwnProperty(key)) return;
        delete model[key]
    }

    if (Object.keys(model).length) {
        res.status(403).send(`Missing Fields: ${Object.keys(model)}`);
        return;
    }

    contactUsService.saveForm(body)
        .then(() => {
            res.send('Form Submitted!')

        })
        .catch((error) => {
            res.status(500).send(error)
        });


});

router.post('/email', (req, res) => {

    let body = req.body;

    if (!body.email) {
        res.status(403).send(`Missing Fields: email`);
        return;
    }

    contactUsService.saveEmail(body)
        .then(() => {
            res.send('Email Saved!')
        })
        .catch((error) => {
            res.status(500).send(error)
        });


});

module.exports = router;