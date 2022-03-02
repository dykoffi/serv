const generalDocs = require("./info.json");

const MaisonDocs = require("../modules/Maison/docs.json"); 
const StateDocs = require("../modules/State/docs.json"); 
const HomeDocs = require("../modules/Home/docs.json");

module.exports = {
    ...generalDocs,
    paths: {
        ...HomeDocs, 
        ...MaisonDocs, 
        ...StateDocs,
    }
};