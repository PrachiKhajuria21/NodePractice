//CRUD

const express = require("express");
const app = express();
const models = require("./models");
// const Post = models.Post;
// const UserData = models.UserData;
// const student_course = models.Student_course
const User = models.User;
const UserDetails = models.UserDetails;
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
app.use(bodyParser.json());

//create
app.post("/user", async (req, res) => {
  console.log(req.body);
  try {
    const userr = await User.create(
      { ...req.body },
      {
        include: {
          model: UserDetails,
          as: "UserDetails",
        },
      }
    );
    console.log(userr);
    // return res.json({ data });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//read
app.get("/user", async (req, res) => {
  console.log("data", req.body);
  const records = await User.findAll({
    include: [
      {
        model: UserDetails,
        as: "UserDetails",
      },
    ],
  });
  console.log("data::::::", records);
  res.send(records);
});

//update
app.put("/userUpdate/:id", async (req, res) => {
  const id = req.params.id;
  console.log("records", req.body);
  const t = await sequelize.transaction();
    const records = await User.update(req.body,{
      where:{
          id:id
      }},{transaction:t})
      const recordsData = await UserDetails.update(req.body.UserDetails,{
        where:{
            userId:id
        }
    }
  );
  // console.log(data, "data");
  // return data;
  console.log(records);
  console.log(recordsData);
  



});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const records = await User.destroy({
    where: {
      id:id
    },
    cascade: true,
    include:[{
      model:UserDetails,
      as:UserDetails,
     
    }]
  });
  res.send(records);
});

app.listen(3012, (req, res) => {
  console.log("apping");
});
