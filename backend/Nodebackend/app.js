const express = require("express");
const bodyParser = require("body-parser");
const app = express();

JWT = module.exports = require("jsonwebtoken");
path = module.exports = require("path");
fs = module.exports = require("fs");
randomString = module.exports = require("randomstring");
logger = module.exports = require("./common/logger");

_ = module.exports = require("underscore");
request = module.exports = require('request');

APP_PATH = module.exports = __dirname;

CONFIG = module.exports = require("./config/config.json");

//app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "public"), {maxAge : '50d'}));
app.use(express.static(path.join(__dirname,'build/front/'),{maxAge : '1d'}));

__ = module.exports = require("./common/common");

const helmet = require("helmet");

//Helmet protection
if (CONFIG.MODE != "Development") {
  app.use(helmet());
}

if (CONFIG.MODE == "Development") {
  var cors = require("cors");
  logger.info("APP is running with allow CORS request");
  app.use(cors());
}

// MAIL
module.exports = _Mail = require("./mails/mail.js");

//Database connection
// DB_HARIKRUSHN_02_1_2020

mongoose = module.exports = require("mongoose");
mongoose.connect(CONFIG.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error',function(e){
	logger.error('Error while connection database',0);
})

db.once('open',function(d){
  logger.info('Database connected successfully');    

//   require('./cron/charity-data');

    // Admins
    if(CONFIG.CREATE_ADMIN){
        const pass = "admin@123123";
        CONFIG.ADMINS.forEach(admin =>{
            Model._create(_Admin,{
                name : admin.split('@')[0],
                password : __._hashPass(pass),
                email : admin
            })
            logger.info('new Admin Created', admin)
        })
    }

    if(CONFIG.CREATE_SETTING) {
      var maintenance = Model._create(_Setting, {})
      if(maintenance) {
        CONFIG.CREATE_SETTING = false;
      }
    }
})

//Models
Model = require("./models/__init__");
const adminRouter = require('./admin-router');
app.use('/master', adminRouter);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.text({ type: "text/html" }));

sendmail = module.exports = require('sendmail')();

//Controllers
require("./controller/__init__");

//Routing
const API = require("./routes/api");
const ADMIN = require("./routes/admin");
const WEB = require("./routes/web");


//app.use("/", WEB);
app.use("/api/v1", API);
app.use("/api/v1/admin", ADMIN);
app.use("/", WEB);

var nodemon = require("nodemon");
nodemon[app];

// Export App

module.exports = app;
