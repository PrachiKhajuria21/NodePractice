const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("unable to connect", error);
  });

const Book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
  },
  subject: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync().then(()=>
{
    console.log("book created successfullly");
}).catch((error)=>{
    console.log("unable to create book",error)
})
