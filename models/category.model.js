'use strict';
/*
Archivo que nos permite conectarnos a la bd y realizar las consultas según lo solicitado.
*/

//Instanciamos la conexión a la nd
var dbConn = require('../config/db.config');

//Definimos el modelo Category
var Category = function(category){
  this.id     = category.id;
  this.name   = category.name;
};

//Método que retorna la data de categorías según filtros explicados en el route/category.router.js
Category.findAll = function (result) {
    dbConn.query("Select id, name from category", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('categories : ', res);
            result(null, res);
        }   
    });
};

module.exports = Category;