require("dotenv").config({ path: require("path").resolve(process.cwd(), "info.env") });
const API_URL = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`

describe("Home routes tester", () => {

    const supertest = require("supertest")(API_URL);

    it("/GET get test", async () => {

        let res = await supertest
            .get("/")
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);

    });
});