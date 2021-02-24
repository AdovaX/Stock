module.exports = (sequelize, Sequelize) => {
    const Installation = sequelize.define("companies", {
        company: {
            type: Sequelize.STRING
        },
        Industry: {
            type: Sequelize.STRING
        },
        Symbol: {
            type: Sequelize.STRING
        },
        Series: {
            type: Sequelize.STRING
        },
        ISIN: {
            type: Sequelize.STRING
        }
    });

    return Installation;
};