const papa = require("papaparse");
const request = require("request");
let n = 1;
const options = { /* options */ };

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
    console.log(nse);
});