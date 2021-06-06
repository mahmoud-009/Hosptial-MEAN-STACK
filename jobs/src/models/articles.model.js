const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
articleTopic:{
    type:String
},
content:{
    type:String
},
article:{
    type:String
},
articlePic:{
    type:String
}
},{
    timestamps:true
}
)

const Article = mongoose.model('Article',articleSchema)
module.exports=Article