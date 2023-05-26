//CRUD

const express = require("express");
const app = express();
const models = require("./models");
// const Post = models.Post;
const Student = models.Student;
const student_course = models.Student_course
const bodyParser = require("body-parser");
app.use(bodyParser.json());


//create
app.post("/user", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const userr = await student_course.create(data);
    console.log(userr);
    return res.json({ data });
  
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


//read
app.get("/user/:id",async(req,res) =>{
    const id = req.params.id;
    console.log("id",id)
    const records = await UserData.findOne({
        where:{
            id
        }
    })
  console.log("data",records)
    res.send(records)
})


app.put("/userUpdate/:id",async(req,res) =>{
    const id = req.params.id;
    const data = req.body;
    console.log("if",id)
    console.log("data",data)
    const records = await UserData.update(data,{
        where:{
            id
        }
    })
//   console.log("data",records)
    res.send(records)
})

app.delete("/user/:id",async(req,res) =>{
    const id = req.params.id;
    const records = await Comment.destroy({
        where:{
            id
        }
    })
    res.send(records)
})

app.listen(3012, (req, res) => {
  console.log("apping");
});
