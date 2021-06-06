const jwt = require('jsonwebtoken')
const doctorModel = require('../models/doctor.model')

const auth = async(req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decodedToken = jwt.verify(token, process.env.JWTKEY)
        const user = await doctorModel.findOne({
            '_id': decodedToken._id,
            'tokens.token':token,
            'accountStatus':true
        })
        if(!user) throw new Error('invalid user')
        req.user= user
        req.token=token
        next()
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'Please authenticate'
        })
    }
}

module.exports = auth