const express = require("express");
const router = express.Router();
const mynum = require("../models/mynumdbmodel");
const { update } = require("../models/mynumdbmodel");

//Get dice no.
router.get('/:id',async (req,res) =>{
    try {
        const num = await mynum.findById(req.params.id);
        res.send(num.number);
    } catch (error) {
        res.status(500).send("Something wrong happened");
    }
})

//Send dice no.
router.post('/:number',async (req,res) =>{
    const num = new mynum({
        number: req.params.number
    })
    
    try {
        const mynumnew = await num.save();
        res.status(201).send("num saved in db successfully");
    } catch (error) {
        res.status(500).send("Something wrong happened"+error);
    }
})

//update dice no.
router.patch('/:id/:number',async (req,res)=>{
   try {
      const mynumber = await mynum.findById(req.params.id);
       if(mynumber == null){
           return res.status(404);
       }
       mynumber.number = req.params.number;  

       const updatedNumber = await mynumber.save();
       res.send("number updated successfully");
   } catch (error) {
       res.send(error);
   }
})

module.exports = router;