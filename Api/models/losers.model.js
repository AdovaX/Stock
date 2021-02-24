module.exports = (sequelize, Sequelize) => {
    const Losers = sequelize.define("losers", {
        symbol: {
            type: Sequelize.STRING
        },
        series: {
            type: Sequelize.STRING
        },
        openPrice: {
            type: Sequelize.STRING
        },
        highPrice: {
            type: Sequelize.STRING
        },
        lowPrice: {
            type: Sequelize.STRING
        },
        ltp: {
            type: Sequelize.STRING
        },
        previousPrice: {
            type: Sequelize.STRING
        },
        netPrice: {
            type: Sequelize.STRING
        },
        tradedQuantity: {
            type: Sequelize.STRING
        },
        turnoverInLakhs: {
            type: Sequelize.STRING
        },
        lastCorpAnnouncementDate: {
            type: Sequelize.STRING
        },
        lastCorpAnnouncement: {
            type: Sequelize.STRING
        }
    });

    return Losers;
};