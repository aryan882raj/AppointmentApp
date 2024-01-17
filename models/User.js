
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('appointments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    }  
});
module.exports = Product;