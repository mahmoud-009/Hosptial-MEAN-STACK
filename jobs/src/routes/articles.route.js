const express = require('express')
const router = new express.Router()
const articles = require('../models/articles.model')
const auth = require('../middleware/doctor.auth')
router.post('/addarticle', auth, async(req, res)=>{
    try{
        const article = new articles({
            ...req.body,
            doctorId:req.user._id
        })
        await article.save()
        // const user = new articles(req.body)
        // await user.save()
       
        res.status(200).send({
            apiStatus: true,
            data: article,
            message:'article successfuly is added'
        })
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'article error'
        })
    } 
} )
router.get('/showarticles', async(req, res)=>{
    try{
        const article = await articles.find()
        res.send(article)
    }
    catch(e){res.send(e)}
})
router.get('/posts', auth, async(req,res)=>{
    let match = {}
    let sort ={}
    if(req.query.postId) match.content = req.query.content
    if(req.query.sortBy){
        const part = req.query.sortBy.split(':')
        sort[part[0]] = part[1]=='desc'?-1:1
    }
    try{
        await req.user.populate({
            path:'Articles' ,
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:(parseInt(req.query.page)*parseInt(req.query.limit)),
                sort
            }
        }).execPopulate()
        res.send(req.user.Articles)
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }
})
// var upload = multer({ dest: 'images/articles' })
// router.post('/article',auth,   upload.single('avatar'), async  (req, res)=> {
//     filename=req.file.destination+ '/' + req.file.filename 
//     fileWithExt = filename+'.'+ (req.file.originalname.split('.').pop())
//     fs.rename(filename, fileWithExt, function(err) {
//         if ( err ) console.log('ERROR: ' + err);
//     });
//     req.user.articlePic= fileWithExt
//     await req.user.save()
//     res.send(req.user)

// })
// imgName=''
// let storage = multer.diskStorage({
//     destination:function(req,res,cb){cb(null, 'images')},
//     filename:function(req,file,cb){
//         imgName = Date.now()+'.'+file.originalname.split('.').pop()
//         cb(null, imgName)
//     }
// })
// var upload1 = multer({storage:storage})
// router.post('/upload', auth, upload1.single('img'), async(req,res)=>{
//     res.send({name:'images/'+imgName})
// })

module.exports=router