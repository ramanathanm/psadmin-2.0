/* eslint-env node */
'use strict';

module.exports = function(app) {
    const express = require('express');
    let customerRouter = express.Router();

    customerRouter.get('/', function(req, res) {
        res.send({
            'customer': []
        });
    });

    customerRouter.post('/', function(req, res) {
        res.status(201).end();
    });

    customerRouter.get('/:id', function(req, res) {
        res.send({
            'customer': {
                id: req.params.id
            }
        });
    });

    customerRouter.put('/:id', function(req, res) {
        res.send({
            'customer': {
                id: req.params.id
            }
        });
    });

    customerRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    app.use('/api/customer', require('body-parser').json());
    app.use('/api/customer', customerRouter);
};
