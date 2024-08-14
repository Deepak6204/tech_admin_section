const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'B.dhruv@2602',
    port: 5432,
});

module.exports = pool;