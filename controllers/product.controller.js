'use strict';
const Product = require('../models/product.model');

exports.findById = function (req, res) {
    Product.findById(req.params, function (err, product) {
        if (err)
            res.send(err);
            res.json(product);
    });
};