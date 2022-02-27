import express = require("express")

const model = require("../db");
const onFinished = require("on-finished");

module.exports = function () {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        onFinished(res, async () => {
            await model.log_.create(
                {
                    data:
                    {
                        protocol: req.protocol,
                        method: req.method,
                        hostname: req.hostname,
                        path: req.originalUrl || req.url,
                        httpVersion: `${req.httpVersionMajor}.${req.httpVersionMinor}`,
                        statusCode: res.statusCode,
                        userIp: req.ip,
                        userReferer: req.headers.referer,
                        userAgent: req.headers["user-agent"]
                    }
                }
            );
        });
        next();
    };
};