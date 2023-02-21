const mongoose = require('mongoose')

const Category = new mongoose.model(
    "category", new mongoose.Schema({
        type: {
                type: String,
            require: true
        },
        name: {
            type:String,
            require: true

        },  
    },
    {timestamps: 
                true},)
)

module.exports={Category}