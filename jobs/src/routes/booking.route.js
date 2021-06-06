const express = require('express')
const router = new express.Router()
const booking = require('../models/booking.model')
router.post('/addBooking', async(req, res)=>{
    try{
        const user = new booking(req.body)
        await user.save()
       
        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'booking successfuly is added'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'booking error'
        })
    } 
} )
router.get('/showBooking', async(req, res)=>{
    try{
        const users = await booking.find()
        res.send(users)
    }
    catch(e){res.send(e)}
})
module.exports=router