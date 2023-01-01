const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    record: {
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true,
        default:Date.now
    }
})

const todomodel = mongoose.model('TodoModel',todoSchema)

module.exports = todomodel