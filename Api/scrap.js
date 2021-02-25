const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.screener.in/company/INFY/consolidated/';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsTable = $('#top-ratios > li').text().replace(/\s/g, "");
        let aboutData = $('.sub > p').text().replace(/\s/g, "");

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
        MarketCap = MarketCap.replace('₹', ' : ');
        StockPE = StockPE.replace('StockP/E', '');
        DividendYield = DividendYield.replace('DividendYield', '');
        Roce = Roce.replace('ROCE', '');
        Roe = Roe.replace('ROE', '');
        let data = [];
        data.push({
            FaceValue: FaceValue,
            BookValue: BookValue,
            CurrentPrice: CurrentPrice,
            HighLow: HighLow,
            MarketCap: MarketCap,
            StockPE: StockPE,
            DividendYield: DividendYield,
            Roce: Roce,
            Roe: Roe

        });
        console.log(JSON.stringify(data));
    })
    .catch(console.error);