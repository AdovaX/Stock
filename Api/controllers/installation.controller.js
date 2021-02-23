const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log("oki");
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const companies = {
        name: req.body.name,
        code: req.body.code,
        stockPrice: req.body.stockPrice
    };
    Companies.create(companies)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};