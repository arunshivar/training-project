var express = require('express');
var path = require('path');
var product = require('./product/product.js')

var appRoutes = function(app)
{

    app.get('/api/v1/products/list',product.getProducts);
    app.get('/api/v1/topRatedProducts/',product.getProductsOnType);


    //index page
    app.get('/*', function(req, res)
    {
        res.render(path.join(__dirname, '../../client/app/index'));
    });
};

module.exports = appRoutes;
//module.exports = router;
