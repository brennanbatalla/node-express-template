const express = require('express')
    , router = express.Router();

router.get('/', function(req, res) {
    res.send('I am a user!')
});

module.exports = router;