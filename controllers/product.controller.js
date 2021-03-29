'use strict';
/*
Desde este archivo controlamos los solicitado entre las rutas y la bd,
como por ejemplo parámetros envíados y métodos a ejecutar 
*/

//Importamos el módelo Product
const Product = require('../models/product.model');

//Exportamos los métodos para ser invocados desde dónde los requieran. Para nuestro caso desde routes/product.route.js 
exports.findById = function (req, res) {
    Product.findById(req.params, function (err, product) {
        if (err)
            res.send(err);
            res.json(product);
    });
};