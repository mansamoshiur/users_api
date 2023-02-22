const mongoose =require('mongoose')
const config = require('./config')

const dbURL = config.db.url;

mongoose.set('strictQuery', false);
mongoose.connect(dbURL)
.then(()=>{
    console.log('mongodb atlast is connected')
})
.catch((error)=>{
    console.log(error);
    process.emit(1)
})