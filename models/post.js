const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : {
        type:String,
        required: true
    },
    imageUrl : {
        type:String,
        required: true
    },
    content:{
        type: String,
        required: true
    },    
    content:{
        type: Object,
        required: String//true
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);