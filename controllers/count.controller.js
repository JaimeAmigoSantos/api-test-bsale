'use strict';
/*
Desde este archivo controlamos los solicitado entre las rutas y la bd,
como por ejemplo parámetros envíados y métodos a ejecutar 
*/

//Importamos el módelo Count
const Count = require('../models/count.model');

//Exportamos los métodos para ser invocados desde dónde los requieran. Para nuestro caso desde routes/count.route.js 
exports.findAll = function (req, res) {
    Count.findAll(function (err, count) {
        console.log('controller')
        if (err)
            res.send(err);
            console.log('res', count);
            res.send(count);
    });
};

exports.findById = function (req, res) {
    Count.findById(req.params, function (err, count) {
        if (err)
            res.send(err);
            res.json(count);
    });
};