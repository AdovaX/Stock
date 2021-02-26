module.exports = (sequelize, Sequelize) => {
    const CData = sequelize.define("companyData", {
        Symbol: {
            type: Sequelize.STRING
        },
        Company: {
            type: Sequelize.STRING
        },
        Industry: {
            type: Sequelize.STRING
        },
        Series: {
            type: Sequelize.STRING
        },
        ISIN: {
            type: Sequelize.STRING
        },
        FaceValue: {
            type: Sequelize.STRING
        },
        BookValue: {
            type: Sequelize.STRING
        },
        CurrentPrice: {
            type: Sequelize.STRING
        },
        HighLow: {
            type: Sequelize.STRING
        },
        MarketCap: {
            type: Sequelize.STRING
        },
        StockPE: {
            type: Sequelize.STRING
        },
        DividendYield: {
            type: Sequelize.STRING
        },
        Roce: {
            type: Sequelize.STRING
        },
        Roe: {
            type: Sequelize.STRING
        },
        About: {
            type: Sequelize.STRING
        }
    });

    return CData;
};