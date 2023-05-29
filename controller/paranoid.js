const express = require("express");
const app = express();
const models = require("../models");
const Paranoid = models.ParanoidEg;
const bodyParser = require("body-parser");
const { sequelize } = require("../models");
app.use(bodyParser.json());

app.post("/user", async (req, res) => {
    console.log(req.body);

    try {
      const userr = await Paranoid.bulkCreate(req.body);
  
      
    }catch(error){
        console.log("error",error)
    }
  });

  app.get("/user",async(req,res)=>{
    // const check = await Paranoid.findAll(
    //     {
    //         paranoid : false
    //     })
 
    // console.log(check);
    // res.send(check)
    const check = await Paranoid.restore(
        {
            where:{
                id:2
            }
        })
 
    console.log(check);
    // res.send(check)
  })

  app.delete("/user",async(req,res)=>{
   const deleteRecord =  await Paranoid.destroy({
        where :{
            id:2
        }
    })
    console.log("deletedRecord",deleteRecord)
  })

  app.listen(5012, (req, res) => {
    console.log("apping");
  });