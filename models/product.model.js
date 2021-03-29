'use strict';
/*
Archivo que nos permite conectarnos a la bd y realizar las consultas según lo solicitado.
*/

//Instanciamos la conexión a la nd
var dbConn = require('../config/db.config');

//Query a ajecutar
var query = "";

//Definimos el modelo Product
var Product = function(product){
    this.id = product.id;
    this.name = product.name;
    this.url_image = product.url_image;
    this.price = product.price;
    this.discount = product.discount;
    this.category = product.category;
    this.cat_name = product.cat_name;
};

//Método que retorna la data de productos según filtros explicados en el route/product.router.js
Product.findById = function (parameters, result) {

    let strSelect =  `select p.id, p.name, p.url_image, p.price, p.discount, p.category, c.name as cat_name ` +
                      `from product as p ` + 
                      `left join category as c on p.category = c.id `;
    var intDesde;
    if(Number(parameters.page) > 1)
        intDesde = (Number(parameters.page) * Number(parameters.rows)) - Number(parameters.rows);
    else
        intDesde = 0;

    switch (parameters.type) {
        case "all":
            query =  `order by c.name asc, p.name asc ` +
                     `limit ${intDesde}, ${parameters.rows}`;
            break;

        case "like":
            query = `where p.name like '%${parameters.parameter}%' or c.name like '%${parameters.parameter}%' ` +
                    `order by c.name asc, p.name asc ` +
                    `limit ${intDesde}, ${parameters.rows}`;
            break;

        case "category":
            query =  `where p.category = ${parameters.parameter} ` +
                     `order by p.name asc ` +
                     `limit ${intDesde}, ${parameters.rows}`;
            break;
    }
    console.log(strSelect + query);
    dbConn.query(strSelect + query, function (err, res) {
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

module.exports = Product;