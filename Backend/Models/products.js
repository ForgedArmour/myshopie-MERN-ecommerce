const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true,
        default:0
    }
})

module.exports = mongoose.model('Products',productSchema);