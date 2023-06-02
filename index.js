const express = require('express');
const bodyparser = require('body-parser')
const { authSchema }= require('../validation/validate')
const app = express()
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));


app.get('/user',async(req,res)=>{

     console.log("userData")
     console.log("re.body",req.body)
     const body = req.body;
     const result =  authSchema.validate(body);
     console.log(result)
     res.send(result)
})

console.log("coming");

app.listen('2000',(req,res)=>{
     console.log("get")
})