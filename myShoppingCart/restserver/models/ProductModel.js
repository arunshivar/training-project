/**
 * Created by sb-c2-02 on 28/2/17.
 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var Schema = mongoose.Schema;

var productSchema = new Schema({
        id:{
            type:String,
            trim:true,
            required: true
        },
        name:{
            type:String,
            trim:true,
            required: true
        },
        price:{
            type:Schema.Types.Double
        },
        description:{
            type:String
        },
        imgPath:{
            type:String
        },
        type:{
            type:String
        },
        brand:{
            type:String
        },
        subType:{
            type:String
        },
        by:{
            type:String
        },
        rating:{
            type:Schema.Types.Double
        },
        Ram:{
            type:String
        },
        model:{
            type:String
        },
        color:{
            type:String
        },
        battery:{
            type:String
        },
        camera:{
            type:Object
        }

    },
    {collection:'products'}
);
/*productSchema.plugin(mongoosePaginate);*/
var productModel = mongoose.model('Product', productSchema);
module.exports = productModel;


