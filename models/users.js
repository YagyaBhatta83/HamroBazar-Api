const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
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
    subscribe: {
        type: Checkbox,
        required:true
    },
    hidephone: {
        type: Checkbox,
        required:true
    },
    terms: {
        type: Checkbox,
        required:true
    },
    image:{
        type:String,
    },
    admin: {
        type: Boolean,
        default: false
    },


});
module.exports = mongoose.model('User', userSchema);