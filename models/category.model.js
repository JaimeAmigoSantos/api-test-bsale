'use strict';
var dbConn = require('../config/db.config');

var Category = function(category){
  this.id     = category.id;
  this.name   = category.name;
};

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