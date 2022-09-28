const Router = require('express');
const router = new Router();
const valueControllers = require('../controllers/value.controllers');

router.get('/value', valueControllers.getValues);

module.exports = router;
