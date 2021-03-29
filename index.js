/*
Llamada al módulo  express para podder controlar las rutas de las perticiones 
y de esta forma saber que metodos ejecutar
*/
const express = require('express');

/*
Llamada al módulo bodypasedr. Como esta api no es rest full  nin nada por el estilo, no necesitamos realizar request post
*/
///const bodyParser = require('body-parser');

/*
Llamada alcors para resolver problemas de referencias o peticiones cruzadas
*/
const cors = require('cors');

/* 
    creamos la app con express
*/
const app = express();

// Configuramos el puerto del servidor
const port = process.env.PORT || 5000;

// parseamos solicitudes content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
//parse requests of content-type - application/json
//app.use(bodyParser.json());

//Definimos la ruta raíz
app.get('/', (req, res) => {
  res.send("Hello bsale");
});

//Seteamos en la app la constante corrs para las referencias cruzadas
app.use(cors());

// Declaramos las rutas según las exportaciones realizadas en los controladores alojados en la carpeta routes
const categoryRoutes = require('./routes/category.route');
const productRoutes = require('./routes/product.route');
const countRoutes = require('./routes/count.route');

/*
Setemos las rutas utilizadas para los request de categorías.
Estas rutas son declaradas y exportadas desde controllers/category.controller.js. 
*/
app.use('/api/v1/categories', categoryRoutes);

/*
Setemos las rutas utilizadas para los request de productos.
Estas rutas son declaradas y exportadas desde controllers/product.controller.js. 
*/
app.use('/api/v1/products', productRoutes);

/*
Setemos las rutas utilizadas para el request que retorna el total de productos existentes.
Estas rutas son declaradas y exportadas desde controllers/count.controller.js. 
*/
app.use('/api/v1/count-products', countRoutes);

// Instanceamos la app para que comience a escuchar los request
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});