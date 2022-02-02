const express   = require('express');
const connectDB = require('./Config/db')
require('dotenv').config()
const Person = require('./Models/Person')

const app = express();


// connecting db
connectDB()

// middlewares
app.use(express.json())
// routes 
app.use('/api/contacts',require('./Routes/person'))
// run()




app.listen(process.env.port, function(err){
    console.log(`server is running on port ${process.env.port}`)
})
