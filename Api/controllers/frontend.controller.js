const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Companies.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });

};