const express = require('express');
const Person  = require('../Models/Person');
const router  = express.Router();


// Adding new contact
// Method post
// req body
router.post('/', async(req,res)=>{
    const {name,age,favFood} = req.body
    try {
        const person = new Person({
            name,age,favFood
        })
        await person.save()
        res.send({Message:'Person added', person})
    } catch (error) {
        res.status(500).send('server error')
    }
    
})

// Get contacts
// Method get
router.get('/',async(req,res)=>{
    try {
        const contacts = await Person.find()
        res.send(contacts)
    } catch (error) {
        res.status(500).send('server error')
    }
})

// Find one by id 
// Method get 
// req params
router.get('/:id',async (req,res)=>{
    const {id} = req.params
    try {
        const find = await Person.findById(id)
        res.send({Message:'Contact found', find})
    } catch (error) {
        res.status(500).send(`Couldnt get ${id}`)
    }
})

// Delete contact
// Method delete
// req. params
router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    try {
        await Person.findByIdAndDelete(id)
        res.send("Contact deleted")
    } catch (error) {
        res.status(500).send("server error")
    }
})

// Update contact
// Method put
// req body + params
router.put('/:id', async(req,res)=>{
    const {id} = req.params
    try {
        const contact = await Person.findByIdAndUpdate(id, {$set:{...req.body}})
        res.send({Message:"Contact updated", contact})
    } catch (error) {
        res.status(500).send("server error");
    }
})



module.exports = router;