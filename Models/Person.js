const mongoose = require('mongoose')
const schema = mongoose.Schema

const personSchema = new schema ({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Number
    },
    favFood : {
        type: [String]
    }
})

module.exports=mongoose.model('Person', personSchema)
