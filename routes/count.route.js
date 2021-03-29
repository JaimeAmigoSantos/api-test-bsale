//Llamada al módulo  express.
const express = require('express')

//Declaramos el enrutador mediante express
const router = express.Router()

//Importamos el controlador que interectuará con la capa de datos. Este se encuentra definido en controllers/count.controller.js
const countController =   require('../controllers/count.controller');



/*
El siguiente request es sobre la ruta /product-count ejecutará el método findAll del controlador controllers/count.controller.js, 
que nos retornara el total de registros
*/
router.get('/', countController.findAll);



/*
El siguiente request es sobre la ruta /product-count/:tipo/:parametro.
Se ejecutará el método findById del controlador controllers/count.controller.js.
Este controlador tomará y almacenará en un objeto los datos de los parámetros de la ruta (tipo y parametro).
El controlador retorna un json con el número total de registros según lo siguiente:

- Si el tipo es 'like' se realiza un filtro  product.name like '%parametro %' or catgegory.name like '%parametro %', 
  retornando el número total de productos bajo los criterios mencionados.

- Si el tipo es 'all' nos traerá el número total de productos existentes sin filtros. 
  En parametro puede ir cualquier cosa, ya que no será tomado en cuenta. 

- Si el tipo es 'category' se realiza un filtro  category.id = parametro, 
  retornando el número  total de productos  por la categoría especifícada.

 ****Todos los parámetros son obligatorios.

Ejemplos:
La siguiente llamada arrojará un json con el múmero total de productos para la categoría con id = 2
http://localhost:5000/api/v1/count-products/category/2

La siguiente llamada arrojará un json con el múmero total de productos sin filtros
http://localhost:5000/api/v1/count-products/all/0

La siguiente llamada arrojará un json con el múmero total de productos en donde 
product.name LIKE '%sp%' or category.name LIKE '%sp%'
http://localhost:5000/api/v1/count-products/like/sp

*/
router.get('/:tipo/:parametro', countController.findById);

module.exports = router