const db = require("../models");
const axios = require('axios');
const papa = require("papaparse");
const request = require("request");
const cheerio = require('cheerio');
const { element } = require("protractor");
let n = 1;
const options = { /* options */ };

const Gainers = db.gainers;
const Losers = db.losers;
const CData = db.CData;
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
};

function get_companies() {
    const dataStream = request.get("https://www1.nseindia.com/content/indices/ind_nifty100list.csv");
    const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

    dataStream.pipe(parseStream);

    let data = [];
    let nse = [];
    let companyData = [];
    parseStream.on("data", chunk => {
        data.push(chunk);
    });

    parseStream.on("finish", () => {

        data.forEach(element => {
            if (n == 1) {
                console.log("skipping cols");
            } else {
                nse.push({
                    Company: element[0],
                    Industry: element[1],
                    Symbol: element[2],
                    Series: element[3],
                    ISIN: element[4]
                });
            }
            n++;
        });
        nse.forEach(element => {
            let url = 'https://www.screener.in/company/' + element.Symbol + '/consolidated/';

            axios(url)
                .then(response => {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    const statsTable = $('#top-ratios > li').text().replace(/\s/g, "");
                    let aboutData = $('.sub > p').text();
                    console.log(aboutData + "===");
                    let FaceValue_cut = statsTable.indexOf("FaceValue");
                    let FaceValue = statsTable.slice(FaceValue_cut);

                    let Roe_cut = statsTable.indexOf("ROE");
                    let Roe = statsTable.slice(Roe_cut, FaceValue_cut);

                    let Roce_cut = statsTable.indexOf("ROCE");
                    let Roce = statsTable.slice(Roce_cut, Roe_cut);

                    let DividendYield_cut = statsTable.indexOf("DividendYield");
                    let DividendYield = statsTable.slice(DividendYield_cut, Roce_cut);

                    let BookValue_cut = statsTable.indexOf("BookValue");
                    let BookValue = statsTable.slice(BookValue_cut, DividendYield_cut);

                    let StockPE_cut = statsTable.indexOf("StockP/E");
                    let StockPE = statsTable.slice(StockPE_cut, BookValue_cut);

                    let HighLow_cut = statsTable.indexOf("High/Low");
                    let HighLow = statsTable.slice(HighLow_cut, StockPE_cut);

                    let CurrentPrice_cut = statsTable.indexOf("CurrentPrice");
                    let CurrentPrice = statsTable.slice(CurrentPrice_cut, HighLow_cut);

                    let MarketCap_cut = statsTable.indexOf("MarketCap");
                    let MarketCap = statsTable.slice(MarketCap_cut, CurrentPrice_cut);

                    FaceValue = FaceValue.replace('FaceValue₹', '');
                    BookValue = BookValue.replace('BookValue₹', '');
                    CurrentPrice = CurrentPrice.replace('CurrentPrice₹', '');
                    HighLow = HighLow.replace('High/Low₹', '');
                    MarketCap = MarketCap.replace('MarketCap₹', '');
                    StockPE = StockPE.replace('StockP/E', '');
                    DividendYield = DividendYield.replace('DividendYield', '');
                    Roce = Roce.replace('ROCE', '');
                    Roe = Roe.replace('ROE', '');
                    let data = [];
                    data.push({
                        Symbol: element.Symbol,
                        Company: element.Company,
                        Industry: element.Industry,
                        Series: element.Series,
                        ISIN: element.ISIN,
                        FaceValue: FaceValue,
                        BookValue: BookValue,
                        CurrentPrice: CurrentPrice,
                        HighLow: HighLow,
                        MarketCap: MarketCap,
                        StockPE: StockPE,
                        DividendYield: DividendYield,
                        Roce: Roce,
                        Roe: Roe,
                        About: aboutData

                    });
                    CData.bulkCreate(data).then(response => {
                        console.log("CData added");
                    })
                }).catch(console.error);
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