const express = require('express')
    , router = express.Router();


router.use('/users/', require('./users.route'));



module.exports = router;
