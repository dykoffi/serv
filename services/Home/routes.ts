import { checkToken } from "cqx-secure";
import express = require("express");

const router: express.Router = require("express").Router();

router

    /**
    * @descr Test API endpoint
    * @route GET /
    * @access public
    */

    .get("/", async (req: express.Request, res: express.Response) => {
        res.json({ message: "It's works" })
    })

module.exports = router;
