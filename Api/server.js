const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const companies = require("./controllers/installation.controller.js");
const db = require("./models");

const app = express();

var corsOptions = {
    origin: "http://localhost:4246"
};
const PORT = process.env.PORT || 4246;
require("./routes/ turorial.routes")(app);
db.sequelize.sync();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to   application." });
});
app.post("/installation", companies.create);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});