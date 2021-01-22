const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "azerty123",
    host: "localhost",
    port: 5432,
    database : "galerie"
});

module.exports = pool;