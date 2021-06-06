const express = require('express')
const router = new express.Router()
const applicant = require('../models/applicant.model')
router.post('/addrequest', async(req, res)=>{
    try{
        const user = new applicant(req.body)
        await user.save()
       
        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'user successfuly registered'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    } 
} )
router.get('/allrequests', async(req, res)=>{
    try{
        const users = await applicant.find()
        res.send(users)
    }
    catch(e){res.send(e)}
})
router.delete('/requset/:id', async(req,res)=>{
    try{
        const _id = req.params.id
        
        const request = await applicant.findOneAndRemove(
            {   
                _id 
               
            })
        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'requset successfuly deleted'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    } 

})

module.exports=router