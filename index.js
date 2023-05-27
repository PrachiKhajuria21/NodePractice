//CRUD

const express = require("express");
const app = express();
const models = require("./models");
const User = models.User;
const UserPosts = models.UserPost;
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
app.use(bodyParser.json());

//create
app.post("/user", async (req, res) => {
  console.log(req.body);
  const t = await sequelize.transaction();
  try {
    // const userr = await User.create(
    //   { ...req.body },
    //   {
    //     include: {
    //       model: UserPosts
    //     },
    //   },{
    //     transaction:t
    //   }
    // );

    let userData = await User.create(req.body, { transaction: t });
    let userPostData = [...req.body.UserPosts];
    let ans = userPostData.map((userPost) => {
      return { ...userPost, userId: userData.dataValues.id };
    });
    let userPosts = await UserPosts.bulkCreate(ans, { transaction: t });
    t.commit();
    console.log("commit");
  } catch (err) {
    console.log("rollback");
    t.rollback();
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
        model: UserPosts,
      },
    ],
  });
  console.log("data::::::", records);
  res.send(records);
});

//update
app.put("/userUpdate/:id", async (req, res) => {
  const id = req.params.id;
  // const child_id = req.params.childID;
  const t = await sequelize.transaction();
  try {
    await User.update(
      req.body,
      {
        where: {
          id: id,
        },
      },
      { transaction: t }
    );

    await UserPosts.update(
      req.body.UserPost,
      {
        where: {
          id: child_id,
        },
      },
      { transaction: t }
    );
    t.commit();
    console.log("commit");
  } catch (error) {
    t.rollback();
    console.log("rollback");
    console.log("error");
    res.send(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id", id);

  await User.destroy({
    where: {
      id: id,
    },
    include: [
      {
        model: UserPosts,
      },
    ],
  });


});

app.listen(3012, (req, res) => {
  console.log("apping");
});
