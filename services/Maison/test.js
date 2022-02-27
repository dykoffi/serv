require("dotenv").config({ path: require("path").resolve(process.cwd(), "info.env") });
const API_URL = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`

describe("Maison routes tester", () => {

    const supertest = require("supertest")(API_URL);

    it("/POST Create new Maison", async () => {

        let res = await supertest
            .post(`/Maison`)
            .send({local : "Abidjan"})
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/GET get all Maison", async () => {
        let res = await supertest
            .get(`/Maison`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/GET/id Show specify Maison", async () => {
        let res = await supertest
            .get(`/Maison/1`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/PUT/id Modify specify Maison", async () => {
        let res = await supertest
            .put(`/Maison/1`)
            .send({})
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

    it("/DELETE/id Delete specify Maison", async () => {
        let res = await supertest
            .del(`/Maison/1`)
            .expect("Content-Type", /json/)

        expect(res.status).not.toBe(500);
    });

});