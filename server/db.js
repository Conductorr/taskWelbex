const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'Poster228',
  host: 'localhost',
  port: 5432,
  database: 'node_db',
});

module.exports = pool;
