let express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    router = express.Router(),
    morgan = require("morgan"),
    compression = require("compression"),
    helmet = require("helmet");

app.use(morgan("common"));
app.use(helmet());
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use('/api/', require("./controllers/routes.js"));


app.listen(port, function () {
    console.log("Server listening on port: " + port);
});

app.get('/', function (req, res, next) {
    res.json({hello: "World"});
});


module.exports = router;
