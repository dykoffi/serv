import express = require("express");

import PTypes = require("../../configs/db/types")

const router: express.Router = require("express").Router();

import maisonService = require("./service")

const maison = new maisonService();

type PError = PTypes.PrismaClientKnownRequestError | Error

router

    /**
     * @descr Create new maison
     * @route POST /maison
     * @access public
     */

    .post("/", async (req: express.Request, res: express.Response) => {

        maison.addOne(req.body)
            .then((data) => { res.status(201).json(data); })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr get all maison
    * @route GET /maison
    * @access public
    */

    .get("/", async (req: express.Request, res: express.Response) => {

        maison.getAll({ where: req.query, orderBy: { id_: "asc" } })
            .then((data) => { res.json(data); })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr Show specify maison identified by id
    * @route GET /maison/id
    * @access public
    */

    .get("/:id", async (req: express.Request, res: express.Response) => {

        maison.getById(parseInt(req.params.id))
            .then((data) => {
                res.status(data === null ? 404 : 200).json(data);
            })
            .catch((error: Error) => {
                console.error(error);
                res.status(500).json({ error: "InternalError", message: "Something wrong" });
            });

    })

    /**
    * @descr Modify specify maison identified by id
    * @route PUT /maison/id
    * @access public
    */

    .put("/:id", async (req: express.Request, res: express.Response) => {

        maison.updateById(parseInt(req.params.id), req.body)
            .then(() => {
                res.status(201).json({ message: "object maison updated successfully" });
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
    * @descr Delete specify maison identified by id
    * @route DELETE /maison/id
    * @access public
    */

    .delete("/:id", async (req: express.Request, res: express.Response) => {

        maison.deleteById(parseInt(req.params.id))
            .then(() => {
                res.status(201).json({ message: "object maison deleted successfully" });
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
