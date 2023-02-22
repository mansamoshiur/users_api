require('dotenv').config();


const dev ={
    app:{
        port:process.env.PORT || 4040
    },
    db:{
        url:process.env.DB_URL || 'mongodb://127.0.0.1:27017/newapi'
    }
}

module.exports = dev;