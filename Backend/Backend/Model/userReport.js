const mongoose = require('mongoose')

const User = new mongoose.model(
    "userReport", new mongoose.Schema({
        ReportType: {
            type: String,
            require: true,
        },
        issue: {
             type: String,
            require: true,
            
        },
        videoPath: {
            type:String
            
        }

        
    },
    {timestamps: 
                true},)
)

module.exports={User}