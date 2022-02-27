import express = require("express");

const app = require("./app");
const createError = require("http-errors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/_index");
const prometheus = require("../middlewares/prometheus")


app.use("/Maison", require("../services/Maison/routes")); 
app.use("/State", require("../services/State/routes")); 
app.use("/", require("../services/Home/routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/metrics", async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => { 
        res.setHeader("Content-Type", prometheus.contentType)
        res.send(await prometheus.metrics())
     }
);

app.use((
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => { next(createError(404)); }
);

app.use((
    err: express.Errback,
    req: express.Request,
    res: express.Response) => {
    res.status(404).json({ error: err.name, message: "Not Found" });
});

module.exports = app;