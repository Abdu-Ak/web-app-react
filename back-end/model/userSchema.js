const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    image: 
    {
      url : String,
      filename : String,
    }
});

const userdetails = mongoose.model('userdetails',UserSchema);
module.exports = userdetails;