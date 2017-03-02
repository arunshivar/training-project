/**
 * Created by sb-c2-02 on 1/3/17.
 */

var productModel = require('../../models/ProductModel');
var mongoose = require('mongoose');
var express = require('express');

var productRouter =
{
    getProducts:function(req,res)
    {
        productModel.find({},function(err, respnse)
        {
            if(err)
                console.log(err);
            else
            {
                console.log("Sending data")
                res.send(respnse);
            }
        });

    },

    getProductsOnType:function(req,res)
    {
        var type = req.param('type');
        productModel.find({"subType":type},function(err,response)   //.sort({points : -1}).limit(5).toArray();
        {
            if(err)
                console.log(err)
            else
            {
                res.send(response)
            }

        });

        //var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q;

    }


};

module.exports = productRouter;

