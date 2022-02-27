const generalDocs = require("./info.json");

const MaisonDocs = require("../services/Maison/docs.json"); 
const StateDocs = require("../services/State/docs.json"); 
const HomeDocs = require("../services/Home/docs.json");

module.exports = {
    ...generalDocs,
    paths: {
        ...HomeDocs, 
        ...MaisonDocs, 
        ...StateDocs,
    }
};