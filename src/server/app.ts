const express = require("express");
const { cwd } = require("process");
const helmet = require("helmet");
const morgan = require("morgan");
const { join } = require("path");
const cors = require("cors");
const compression = require("compression")

const favicon = require('express-favicon');
const cookieparser = require("cookie-parser");
const saveLog = require("../middlewares/saveLog");

const ExpressApp = express();

ExpressApp.use(compression());
ExpressApp.use(helmet());
ExpressApp.use(cors());
ExpressApp.use(cookieparser());
ExpressApp.use(saveLog());
ExpressApp.use(morgan("dev"));
ExpressApp.use(favicon(__dirname + '/public/favicon.ico'));
ExpressApp.use(express.urlencoded({ extended: false }));
ExpressApp.use(express.static(join(cwd(), "public")));
ExpressApp.use(express.json());

module.exports = ExpressApp;