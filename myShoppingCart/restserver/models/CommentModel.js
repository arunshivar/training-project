/**
 * Created by sb-c2-02 on 28/2/17.
 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var Schema = mongoose.Schema;
var commentSchema = new Schema({
        product:{
            type:Schema.Types.ObjectId,
            ref:'Product'
        },
        comments:[{
            text:{
                type:String,
                trim:true
            },
            rating:{
                type:Schema.Types.Double
            },
            user:{
                type: String,
                trim:true
            },
            commentedDate:{
                type:Date,
                default: Date.now
            }
        }]
    },
    {collection:'comments'}
);
var commentModel = mongoose.model('Comment', commentSchema);
module.exports = commentModel;


