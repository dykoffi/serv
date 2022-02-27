require("dotenv").config({ path: require("path").resolve(process.cwd(), "info.env") });
const API_URL = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`

describe("State routes tester", () => {

    const supertest = require("supertest")(API_URL);

    it("/POST Create new State", async () => {

        let res = await supertest
            .post(`/State`)
            .send({name : "CI"})
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/GET get all State", async () => {
        let res = await supertest
            .get(`/State`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/GET/id Show specify State", async () => {
        let res = await supertest
            .get(`/State/1`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/PUT/id Modify specify State", async () => {
        let res = await supertest
            .put(`/State/1`)
            .send({})
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/DELETE/id Delete specify State", async () => {
        let res = await supertest
            .del(`/State/1`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

});