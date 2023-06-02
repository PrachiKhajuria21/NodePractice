const express = require("express");
const app = express();
const models = require("../models");
const Student = models.Student;
const Course = models.Course;
const bodyParser = require("body-parser");
const { sequelize,op } = require("../models");
app.use(bodyParser.json());


app.post("/user", async(req,res)=>{
    const course = await Course.findAll({
        where:{
            name:["BE","Btech"]
        }
    })

    const student = await Student.create(req.body)
    const data = student.addCourse(course)
    res.send(data)
})

app.listen(3000)