const mysql = require("mysql2");
require("dotenv").config();

// DATABASE INFO
const pool = mysql.createPool ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default is the same as connectionLimit
    idleTimeout: 60000, // remove a connection from the pool after the connection has been idle (unused) for this many milliseconds
    queueLimit: 0,

    // FOR MONGO DB
    // enableKeepAlive: true,
    // keepAliveInitialDelay: 0,
});

module.exports = pool;