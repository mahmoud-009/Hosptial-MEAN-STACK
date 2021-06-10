const express = require('express')
const router = new express.Router()
const doctors = require('../models/doctor.model')
const auth = require('../middleware/doctor.auth')
const multer = require('multer')
const fs = require('fs')
router.post('/register', async(req, res)=>{
    try{
        const user = new doctors(req.body)
        await user.save()
       
        res.status(200).send({
            apiStatus: true,
            data: user,
            message:'doctor successfuly is registered'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'doctor register error'
        })
    } 
} )
router.get('/showdoctors',   async(req, res)=>{
    try{
        const users = await doctors.find()
        res.send(users)
    }
    catch(e){res.send(e)}
})
 
// router.get('/doctorprofile', auth,async(req,res)=>{
//     try{
//         const user = await doctors.findById({_id})
//         res.send(user)
//         console.log(user)
//     }
//     catch(e){res.send(e)}
// })
router.get('/activate/:id', async(req, res)=>{
    try{
        const _id= req.params.id
        const user = await doctors.findById({_id})
        if(!user) throw new Error('invalid user id')
        user.accountStatus = true
        await user.save()
        res.status(200).send({
            apiStatus:true,
            data: user,
            message: 'user status updated and activated'
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
router.post('/login',async(req,res)=>{
    try{
        const user = await doctors.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
   
        res.status(200).send({
            apiStatus:true,
            data:{user, token},
            message:"doctor logged in"
        })
    }
    catch(error){
        console.log(req.body.email),
        console.log(req.body.password)
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})

router.get('/mypage', auth,async(req,res)=>{
    res.send(req.user)
    console.log(req.user)
})

router.post('/logout', auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((element)=>{
            return element!=req.token
        })
        await req.user.save()
        res.status(200).send({
            apiStatus: true,
            data:'',
            message:'logged out'
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
var upload = multer({ dest: 'images/profile' })
router.post('/profile',    upload.single('avatar'), async  (req, res)=> {
    filename=req.file.destination+ '/' + req.file.filename 
    fileWithExt = filename+'.'+ (req.file.originalname.split('.').pop())
    fs.rename(filename, fileWithExt, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
    req.user.userProfile= fileWithExt
    await req.user.save()
    res.send(req.user)

})
imgName=''
let storage = multer.diskStorage({
    destination:function(req,res,cb){cb(null, 'images')},
    filename:function(req,file,cb){
        imgName = Date.now()+'.'+file.originalname.split('.').pop()
        cb(null, imgName)
    }
})
var upload1 = multer({storage:storage})
router.post('/upload', auth, upload1.single('img'), async(req,res)=>{
    res.send({name:'images/'+imgName})
})


module.exports=router