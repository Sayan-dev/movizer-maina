const { Long } = require('mongodb');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id:{type:String,required:true},
    userName: { type: String, required: true },
    email: { type: String },
    favourite:{type:Array},
    password: { type: String,  minlength: 8 },
    phoneNo: { type: String },
    imageUrl: { type:String  },

},{timestamps:true});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
