module.exports = (sequelize, Sequelize) => {
    const CData = sequelize.define("companyData", {
        Symbol: {
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
        }
    });

    return CData;
};