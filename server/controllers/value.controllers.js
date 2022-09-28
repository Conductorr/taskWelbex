const db = require('../db');

//ЗАПРОС С БД

class ValueControllers {
  async getValues(req, res) {
    const result = await db.query(`SELECT * FROM content`);
    res.json(result.rows);
  }
}

module.exports = new ValueControllers();
