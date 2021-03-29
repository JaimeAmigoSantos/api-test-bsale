'use strict';
/*
Desde este archivo controlamos los solicitado entre las rutas y la bd,
como por ejemplo parámetros envíados y métodos a ejecutar 
*/

//Importamos el módelo Count
const Category = require('../models/category.model');

//Exportamos los métodos para ser invocados desde dónde los requieran. Para nuestro caso desde routes/category.route.js 
exports.findAll = function (req, res) {
    Category.findAll(function (err, category) {
        console.log('controller')
        if (err)
            res.send(err);
            console.log('res', category);
            res.send(category);
    });
};