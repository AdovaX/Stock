module.exports = (sequelize, Sequelize) => {
    const Installation = sequelize.define("companies", {
        name: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        },
        stockPrice: {
            type: Sequelize.INTEGER
        }
    });

    return Installation;
};