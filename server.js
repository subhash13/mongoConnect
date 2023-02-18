const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db = 'mongodb://localhost:27017/test'
mongoose.connect(db).then(()=>{
    console.log('connected to database...!');
})

//creating a schema for database
const testSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    role:{
        type:String,
    }
})

//create a model for the schema
const Test = mongoose.model('Test',testSchema)

//adding a data 
const data = new Test({
    name:'Ross',
    age:40,
    role:'dinasours'
})

data.save().then((doc)=>{
    console.log(doc);
}).catch((err)=>{
    console.log('error while adding data',err);
})