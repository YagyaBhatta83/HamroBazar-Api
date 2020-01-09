const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
    },
    mobilephone:{
        type:String,
        required:true
    },
    streetName:{
        type:String,
    },
    arealocation:{
        type:String,
        required:true
    },
    cityname:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
});
module.exports = mongoose.model('User', userSchema);