const express = require('express');
const cros = require('cors')
const morgan = require('morgan');
const userRouter = require('./routes/user.route')
require('./config/db')

const app = express()

app.use(morgan('dev'))
app.use(cros())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/users', userRouter)

app.get('/new', (req,res)=>{
    res.sendFile(__dirname + '/./views/index.html')
})
app.get('/blog', (req,res)=>{
    res.status(201).json("This is the blog")
})
app.get('/', (req,res)=>{
    res.status(201).json("This is the Home")
})
// route not found error
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"})
})
// server error
app.use((err,req,res,next)=>{
    res.status(500).json({message:"something broke"})
})


module.exports = app;