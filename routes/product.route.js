//Llamada al módulo  express.
const express = require('express')

//Declaramos el enrutador mediante express
const router = express.Router()

//Importamos el controlador que interectuará con la capa de datos. Este se encuentra definido en controllers/product.controller.js
const productController =   require('../controllers/product.controller');



/*
El siguiente request es sobre la ruta /products/:type/:parameter/:page/:rows .
Se ejecutará el método findById del controlador controllers/product.controller.js.
Este controlador tomará y almacenará en un objeto los datos de los parámetros de la ruta (type, parameter, page, rows).
El controlador retorna un json con la data según lo siguiente:

- Si el type es 'like' se realiza un filtro  product.name like '%parameter%' or category.name like '%parameter%', 
  retornando la data de productos según estos criterios.

- Si el type es 'all' nos traerá  toda la data de productos existentes sin filtros. 
  En parameter puede ir cualquier cosa, ya que no será tomado en cuenta.

- Si el type es 'category' se realiza un filtro  category.id = parameter, 
  retornando la data de productos según la categoría.

- Los parametros page y rows son utilizados para la sentencia LIMIT (LIMIT page, rows) y son utilizados para la paginación.

  ****Todos los parámetros son obligatorios.

Ejemplos:
La siguiente llamada arrojará un json con la data de los primeros 10  productos para la categoría con id = 2
http://localhost:5000/api/v1/products/category/2/1/10

La siguiente llamada arrojará un json con la data de los primeros 10  productos sin filtros
http://localhost:5000/api/v1/products/all/0/1/10

La siguiente llamada arrojará un json con la data de los primeros 10  productos en donde 
product.name LIKE '%sp%' or category.name LIKE '%sp%'
http://localhost:5000/api/v1/products/like/sp/1/10

*/
router.get('/:type/:parameter/:page/:rows', productController.findById);

module.exports = router