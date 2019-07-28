const express=require('express')
const router =express.Router()
const Note=require('../models/note')

// get all
router.get('/',async (req,res)=>{
    console.log('recieved get req')
    try{

        const notes=await Note.find().sort({createdDate:-1})
        res.json(notes)
    }
    catch(err){
        res.status(500).json({message:err.message})

    }

})
// get one
router.get('/:id',(req,res)=>{

// req.params.id

})
// create one
router.post('/',async (req,res)=>{
    console.log('post req recieved')
    const note= new Note({name:req.body.name,text:req.body.text})
    try{
        const newNote= await note.save()
        res.status(201).json(newNote)
    }
    catch(err){
        res.status(400).json({message:err.message});
        
    }    


})

// update one
router.patch('/',(req,res)=>{})
// delete one
router.delete('/:id',(req,res)=>{})



module.exports=router