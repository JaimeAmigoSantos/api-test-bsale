const express = require('express')
const router = express.Router()
const countController =   require('../controllers/count.controller');

router.get('/', countController.findAll);
router.get('/:tipo/:parametro', countController.findById);

module.exports = router