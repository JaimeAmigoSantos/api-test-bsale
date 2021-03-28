'use strict';
const Category = require('../models/category.model');

exports.findAll = function (req, res) {
    Category.findAll(function (err, category) {
        console.log('controller')
        if (err)
            res.send(err);
            console.log('res', category);
            res.send(category);
    });
};