const models = require("../models");
const Comment = models.NewComments;
const Video = models.Videos;
const Image = models.Images;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize } = require("../models");
app.use(bodyParser.json());

// Comment.bulkCreate([{
//     title:"amazing",
//     commentId:1,
//   commentType:"video"
// },{
//   title:"good shot",
//   commentId:6,
//   commentType:"image"
// }])

app.get("/user", async (req, res) => {
  // image to comments
  const imageData = await Image.findAll({
    include: [
      {
        model: Comment,
      },
    ],
  });

  //video to comments
  const videoData = await Video.findAll({
    include: [
      {
        model: Comment,
      },
    ],
  });

  // comments to image
  const commentImgData = await Comment.findAll({where:{commentType: "image"},
    include: [
      {
        model: Image,
      }
    ],
  });

  // comments to video
  const commentVidData = await Comment.findAll({
    include: [
      {
        model: Video,
      },
    ],
  });

  // console.log("data",commentData)
  res.send(commentImgData);
});

app.listen(2000, (req, res) => {
  console.log("hello donee");
});
