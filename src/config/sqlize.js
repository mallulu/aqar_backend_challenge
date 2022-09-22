const Sqlize = require("sequelize");

module.exports = new Sqlize(
    'AQAR', 
    'testuser', 
    '3gD4XH1pS9n', 
    {
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql'
    }
);
