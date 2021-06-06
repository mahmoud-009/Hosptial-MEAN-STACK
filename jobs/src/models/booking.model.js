const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
    userId:{type:Number},
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
doctorName:{
    type:String,
    trim:true
},
date:{
type:Date
} 
},{
    timestamps:true
}
)
bookingSchema.pre('save', async function(next){
    lastUser = await Booking.findOne({}).sort({_id:-1})
        user = this
        if(!lastUser) user.userId=1
        else user.userId = lastUser.userId+1    
        next()
    })
const Booking = mongoose.model('booking',bookingSchema)
module.exports=Booking