const Sqlize = require("sequelize");
require('dotenv').config();

module.exports = new Sqlize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: '3307',
        dialect: 'mysql',
        logging: false
    }
);
