const db = require("../models");
const axios = require('axios');
const papa = require("papaparse");
const request = require("request");
let n = 1;
const options = { /* options */ };

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

    const dataStream = request.get("https://www1.nseindia.com/content/indices/ind_nifty100list.csv");
    const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

    dataStream.pipe(parseStream);

    let data = [];
    let nse = [];
    parseStream.on("data", chunk => {
        data.push(chunk);
    });

    parseStream.on("finish", () => {

        data.forEach(element => {
            if (n == 1) {
                console.log("skipping cols");
            } else {
                nse.push({
                    company: element[0],
                    Industry: element[1],
                    Symbol: element[2],
                    Series: element[3],
                    ISIN: element[4]
                });
            }
            n++;
        });
        Companies.bulkCreate(nse)
            .then(data => {
                console.log("Installation completed ! comapnies are added.");
            })
            .catch(err => {
                console.log(err);
            });

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