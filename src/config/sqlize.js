const Sqlize = require("sequelize");
require('dotenv').config();

console.log(process.env.DB_NAME);

module.exports = new Sqlize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
);
