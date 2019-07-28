const mongoose= require('mongoose')

const noteSchema=new mongoose.Schema({
name:{type:String,required:true},
text:{type:String,required:true},

createdDate:{type:Date,required:true,default:Date.now(),
updatedDate:{type:Date,required:true,default:Date.now()}

}




})
module.exports=mongoose.model('Note',noteSchema)