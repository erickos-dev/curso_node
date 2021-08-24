var mysql = require('mysql');
var comMysql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'e#mysql#',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return comMysql;
}