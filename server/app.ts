const express = require("express");
const { cwd } = require("process");
const helmet = require("helmet");
const morgan = require("morgan");
const { join } = require("path");
const cors = require("cors");

const cookieparser = require("cookie-parser");
const saveLog = require("../middlewares/saveLog");

const ExpressApp = express();

ExpressApp.use(express.urlencoded({ extended: false }));
ExpressApp.use(express.static(join(cwd(), "public")));
ExpressApp.use(express.json());
ExpressApp.use(cookieparser());
ExpressApp.use(morgan("dev"));
ExpressApp.use(saveLog());
ExpressApp.use(helmet());
ExpressApp.use(cors());

module.exports = ExpressApp;