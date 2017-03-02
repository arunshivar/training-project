/**
 * Created by sb-c2-02 on 28/2/17.
 */
/*to load default data into mongo*/
var mongoose = require('mongoose');
var database = require("./database");
var fs = require('fs');
var Q = require('q');
var moment = require('moment');
var dateFormat = require('dateformat');

var productModel = require('./models/ProductModel');
var commentModel = require('./models/CommentModel');

function readJSON()
{
    var deffered = Q.defer();
    fs.readFile('data/data.json', 'utf8', function (err, data)
    {
        if (err) {
            deffered.reject("Failed to get data");
        }
        else
        {
            var json = JSON.parse(data);

            deffered.resolve(json);
        }
    });
    return deffered.promise;
}

var promise = readJSON();
promise.then(
    function (json)
    {
        storeData(json);
    },
    function(error)
    {
        console.log('Failed');
    }

);

function storeData(json)
{
    var jsonArray = json;
    var deffered = Q.defer();
    for(var i in jsonArray)
    {
        var product = new productModel({
            id:jsonArray[i].id,
            name:jsonArray[i].name,
            price:jsonArray[i].price,
            description:jsonArray[i].description,
            imgPath:jsonArray[i].imgPath,
            type:jsonArray[i].type,
            brand:jsonArray[i].brand,
            subType:jsonArray[i].subType,
            by:jsonArray[i].by,
            rating:jsonArray[i].rating,
            RAM:jsonArray[i].RAM,
            model:jsonArray[i].modelName,
            color:jsonArray[i].color,
            battery:jsonArray[i].battery,
            camera:jsonArray[i].camera
        })

        product.save(function(err)
        {
            if(err)
            {
                deffered.reject("Failed to get data");
            }
        });

        var commentsArray = jsonArray[i].comments;

        var comment = new commentModel({
            product:product._id
        })

        for (var j in commentsArray)
        {
            var c = commentsArray[j];

            var date = moment(c['commentedOn'].toString(), 'DD/MM/YYYY');
            var formatedDate = date.format('MM/DD/YYYY');
            var formatedIso = dateFormat(formatedDate, "isoDateTime");
            var commentObj = { text: c['text'], rating: c['rating'], user: c['username'], commentedDate:formatedIso};
            comment.comments.push(commentObj);
        }

        comment.save(function(err)
        {
            if(err)
                deffered.reject("Failed to get data");
        });

    }
    return deffered.promise;

}

function close() {
    mongoose.connection.close(
        function () {
            console.log("Disconnected");
        });
}

