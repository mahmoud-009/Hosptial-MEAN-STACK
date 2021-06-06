const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userId:{type:Number},
specialty:{
    type:String,
    trim:true
},
name:{
    type:String,
    trim:true
},
age:{
    type:Number,
},    
email:{
    type:String,
    trim:true},
address:{
    type:String,
    trim:true},
phone:{
    type:String,
    trim:true},
dgree:{
    type:String,
    trim:true}
},{
    timestamps:true
}
)
userSchema.pre('save', async function(next){
    lastUser = await Applicant.findOne({}).sort({_id:-1})
        user = this
        if(!lastUser) user.userId=1
        else user.userId = lastUser.userId+1    
        next()
    })
const Applicant = mongoose.model('Applicant',userSchema)
module.exports=Applicant