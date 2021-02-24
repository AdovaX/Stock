const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const companies = require("./controllers/installation.controller.js");
const gainers = require("./controllers/gainers.controller.js");
const db = require("./models");

const app = express();

var corsOptions = {
    origin: "http://localhost:4247"
};
const PORT = process.env.PORT || 4247;
require("./routes/ turorial.routes")(app);
db.sequelize.sync();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to   application." });
});
app.post("/installation", companies.create);
app.get("/gainers", gainers.lists);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});