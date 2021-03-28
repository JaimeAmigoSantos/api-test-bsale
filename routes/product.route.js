const express = require('express')
const router = express.Router()
const productController =   require('../controllers/product.controller');

router.get('/:type/:parameter/:page/:rows', productController.findById);

module.exports = router