let morgan = require('morgan');
let bodyParser = require('body-parser');
const path = require('path');

module.exports = function(app, express){
    
    app.use(function(req, res, next) { 
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
    ////////////////to upload any image at any size/////////////
    // console.log('Limit file size: '+limit);
// app.use(bodyParser.urlencoded({limit: '50mb'}));
// app.use(bodyParser.json({limit: '50mb'}));

    ////////////////
        app.use(express.static(path.join(__dirname, '/../../dist')));  

	app.use(function(req,res,next){
        let _send = res.send;
        let sent = false;
        res.send = function(data){
            if(sent) return;
            _send.bind(res)(data);
            sent = true;
        };
        next();
    });
};