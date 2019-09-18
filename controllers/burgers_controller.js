//require express and burger.js
var burger = require('../models/burger')

var express = require('express');
// creating router
var router = express.Router();

// creating routes for the burger app

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
        res.json(data)
    });
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne('burger_name', req.body.name, function (result) {
        res.json({ id: result.insertId })
    });
});

router.put('/api/burgers/:id', function (req, res) {
    var id = req.params.id;
    burger.updateOne('devoured', true, id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

//export the router

module.exports = router;