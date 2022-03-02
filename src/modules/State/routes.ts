import express = require("express");

import PTypes = require("../../configs/db/types")

const router: express.Router = require("express").Router();

import stateService = require("./service")

const state = new stateService();

type PError = PTypes.PrismaClientKnownRequestError | Error

router

    /**
     * @descr Create new state
     * @route POST /state
     * @access public
     */

    .post("/", async (req: express.Request, res: express.Response) => {

        state.addOne(req.body)
            .then((data) => { res.status(201).json(data); })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr get all state
    * @route GET /state
    * @access public
    */

    .get("/", async (req: express.Request, res: express.Response) => {

        state.getAll({ where: req.query, orderBy: { id_: "asc" } })
            .then((data) => { res.json(data); })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr Show specify state identified by id
    * @route GET /state/id
    * @access public
    */

    .get("/:id", async (req: express.Request, res: express.Response) => {

        state.getById(parseInt(req.params.id))
            .then((data) => {
                res.status(data === null ? 404 : 200).json(data);
            })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr Modify specify state identified by id
    * @route PUT /state/id
    * @access public
    */

    .put("/:id", async (req: express.Request, res: express.Response) => {

        state.updateById(parseInt(req.params.id), req.body)
            .then(() => {
                res.status(201).json({ message: "object state updated successfully" });
            })
            .catch((error: PError) => {

                console.error(error);
                if ("code" in error && error.code === "P2025") {
                    res.status(404).json({ error: "NotFound", message: error.meta });
                } else {
                    res.status(500).json({ error: "InternalError", message: "Something wrong" });
                }

            });

    })

    /**
    * @descr Delete specify state identified by id
    * @route DELETE /state/id
    * @access public
    */

    .delete("/:id", async (req: express.Request, res: express.Response) => {

        state.deleteById(parseInt(req.params.id))
            .then(() => {
                res.status(201).json({ message: "object state deleted successfully" });
            })
            .catch((error: PError) => {
                console.error(error);
                if ("code" in error && error.code === "P2025") {
                    res.status(404).json({ error: error.name, message: error.meta });
                } else {
                    res.status(500).json({ error: "InternalError", message: "Something wrong" });
                }
            });

    });

module.exports = router;
