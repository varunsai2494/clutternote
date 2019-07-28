const express=require('express')
const router =express.Router()
const Subscriber=require('../models/subscribers')

// get all
router.get('/',async (req,res)=>{
    try{
        const subscribers=await Subscriber.find()
        res.json(subscribers)
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

    const subscriber= new Subscriber({name:req.body.name,subscribedToChannel:req.body.subscribedToChannel})
    try{
        const newsubscriber= await subscriber.save()
        res.status(201).json(newsubscriber)
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