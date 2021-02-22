var bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());



var port = process.env.PORT || 8089;

app.get('/api', function(req, res) {
    axios.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json')
        .then(response => {
            res.json({ message: response.data });
            return response;
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/api/all', function(req, res) {
    axios.get('https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json')
        .then(response => {
            res.json({ message: response.data });
            return response;
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})