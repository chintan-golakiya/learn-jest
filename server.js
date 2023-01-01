const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
mongoose.connect(process.env.MONGODB)
const todoModel = require('./models/todo')
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=> {
  res.json({
    message : "Hello to test"
  })
})

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + process.env.MONGODB);
});

const closeDbConnection = () => {
  mongoose.connection.close();
}

app.post('/create',async(req,res)=>{
  const record = req.body
  console.log(record)
  const result = await todoModel.create(record)
  console.log(result)
  res.sendStatus(201)
})

app.get('/get',async(req,res)=>{
  const records = await todoModel.find({})
  res.json(records)
})

app.post('/delete',async(req,res)=>{
  const reqbody = req.body
  const response = await todoModel.findByIdAndRemove(reqbody._id)
  console.log(response)
  res.json({status:'ok'})
})


module.exports = {app, closeDbConnection};