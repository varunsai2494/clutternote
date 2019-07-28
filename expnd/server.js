
require('dotenv').config()
var cors = require('cors')
const express = require('express')
const app=express()
const mongoose= require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('Connected to database'))


app.use(express.json())
app.use(cors())
const subscriberRouter=require('./routes/subscribers')
const noteRouter=require('./routes/note')
app.use('/subscribers',subscriberRouter) 
app.use('/note',noteRouter)    


app.listen(3000,()=> console.log('server started'))