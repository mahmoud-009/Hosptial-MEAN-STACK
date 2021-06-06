const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const doctorSchema = new mongoose.Schema({
    userId:{type:Number},
    accountStatus:{type:Boolean, default:false},
name:{
    type:String,
    trim:true
},
number:{
    type:String,
    trim:true
},
email:{
    type:String,
},    
medicalDepartment:{
    type:String,
    trim:true},
password:{
        type:String,
        trim:true
    },    
tokens:[
        {token:{type:String, required:true}}
    ],
    userProfile:{
        type:String
    }
},{
    timestamps:true
}
)
doctorSchema.virtual('Articles', {
    ref:'Article',
    localField:'_id',
    foreignField:'doctorId'
})
doctorSchema.pre('save', async function(next){
    lastUser = await Doctor.findOne({}).sort({_id:-1})
        user = this
        if(!lastUser) user.userId=1
        else user.userId = lastUser.userId+1  

        if(user.isModified('password')){
            user.password = await bcrypt.hash(user.password, 12)
        }
        next()
    })
doctorSchema.methods.generateAuthToken = async function(){
        const user = this
        const token = jwt.sign({_id: user._id.toString()}, process.env.JWTKEY)
        user.tokens = user.tokens.concat({token})
        await user.save()
        return token
    }
doctorSchema.statics.findByCredentials = async(email, password)=>{
        const user = await Doctor.findOne({email})
        if(!user) throw new Error('invalid email')
        if(!user.accountStatus) throw new Error('please activate your account')
        const isvalid = await bcrypt.compare(password, user.password)
        if(!isvalid) throw new Error('invalid pass')
        return user
    }

    
const Doctor = mongoose.model('Doctor',doctorSchema)
module.exports=Doctor