const db = require("../models");
const axios = require('axios');
const { losers } = require("../models");

const Companies = db.companies;
const Gainers = db.gainers;
const Losers = db.losers;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve({ msg: 'To do some more job' }), 500);
    });
    promise.then(function() {
        get_companies();
    }).then(function() {
        get_gainers();
    }).then(function() {
        get_losers();
    });
    res.send("Installation completed.");

    // const companies = {
    //     name: req.body.name,
    //     code: req.body.code,
    //     stockPrice: req.body.stockPrice
    // };
    // Companies.create(companies)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating the Tutorial."
    //         });
    //     });
};

function get_companies() {
    const URL = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json';
    axios.get(URL)
        .then(function(response) {
            // handle success
            let result = response.data;
            //console.log(result.data);
            Companies.bulkCreate(result.data)
                .then(data => {
                    console.log("Installation completed ! Comapnies are added.");
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}

function get_gainers() {
    const URL = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json';
    axios.get(URL)
        .then(function(response) {
            // handle success
            let result = response.data;
            //console.log(result.data);
            Gainers.bulkCreate(result.data)
                .then(data => {
                    console.log("Installation completed ! Gainers are added.");
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}

function get_losers() {
    const URL = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/losers/niftyLosers1.json';
    axios.get(URL)
        .then(function(response) {
            // handle success
            let result = response.data;
            //console.log(result.data);
            Losers.bulkCreate(result.data)
                .then(data => {
                    console.log("Installation completed ! Losers are added.");
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}