let express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    router = express.Router(),
    morgan = require("morgan"),
    compression = require("compression"),
    helmet = require("helmet"),
    path = require('path');

app.use(morgan("common"));
app.use(helmet());
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/', require("./controllers/routes.js"));

app.listen(port, function () {
    console.log("Server listening on port: " + port);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


module.exports = router;
