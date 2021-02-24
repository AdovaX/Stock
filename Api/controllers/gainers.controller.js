const db = require("../models");
const axios = require('axios');

const Companies = db.companies;
const Op = db.Sequelize.Op;
exports.lists = (req, res) => {
    const URL = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json';
    axios.get(URL)
        .then(function(response) {
            // handle success
            console.log(response.data.data);
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });


};