'use strict';
const Count = require('../models/count.model');

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