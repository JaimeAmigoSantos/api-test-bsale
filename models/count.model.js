'use strict';
var dbConn = require('../config/db.config');

var query = "";

var Count = function(count){
    this.total_rows = count.total_rows;
};

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

module.exports = Count;