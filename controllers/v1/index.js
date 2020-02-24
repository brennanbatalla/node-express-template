const express = require('express')
    , router = express.Router();


router.use('/users/', require('./users.controller'));
router.use('/contact/', require('./contactForm.controller'));



module.exports = router;
