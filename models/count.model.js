'use strict';
/*
Archivo que nos permite conectarnos a la bd y realizar las consultas según lo solicitado.
*/

//Instanciamos la conexión a la nd
var dbConn = require('../config/db.config');

//Query a ajecutar
var query = "";

//Definimos el modelo Count
var Count = function(count){
    this.total_rows = count.total_rows;
};


//Método que retorna el número total de productos
Count.findAll = function (result) {

    query = "select count(*) as total_rows " +
            "from product as p";
            

    dbConn.query(query, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('rows number : ', res);
            result(null, res);
        }   
    });
};

//Método que retorna el número total de productos según filtros explicados en el route/count.router.js
Count.findById = function (parametros, result) {

     switch (parametros.tipo) {
        case "all":
            query = `select count(*) as total_rows ` +
                    `from product as p`;
            break;
        case "like":
            query = `select count(*) as total_rows ` +
                    `from product as p ` +
                    `left join category as c on p.category = c.id ` +
                    `where p.name like '%${parametros.parametro}%' or c.name like '%${parametros.parametro}%'`;
             break;
        case "category":
            query = `select count(*) as total_rows ` +
                    `from product as p ` +
                    `left join category as c on p.category = c.id ` +
                    `where p.category = ${parametros.parametro}`;
             break;
    }
    
    dbConn.query(query, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('products : ', res);
            result(null, res);
        }
    });
};

//Exportamos los métodos para ser invocados desde dónde los requieran. Para nuestro caso desde controllers/count.controller.js 
module.exports = Count;