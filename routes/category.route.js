const express = require('express')
const router = express.Router()
const categoryController =   require('../controllers/category.controller');

/*
El siguiente request es sobre la ruta /categories .
Se ejecutará el método findAll del controlador controllers/category.controller.js.
El controlador retorna un json con toda las categorías.

Ejemplos:

La siguiente llamada arrojará un json con la data existente en la tabla de categorías
http://localhost:5000/api/v1/categories/


*/
router.get('/', categoryController.findAll);

module.exports = router