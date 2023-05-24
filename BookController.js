const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const Op = Sequelize.Op;
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


//inserting records
// sequelize.sync().then(()=>
// {
//    Book.bulkCreate([
//     {
//         title:"Clean Green India One",
//         author:"Shivam Gupta",
//         releaseDate:"2021-03-13",
//         subject:3
//     },
//     {
//         title:"The Secret",
//         author:"Rhonda Byrn",
//         releaseDate:"2021-11-13",
//         subject:4 
//     },
//     {
//         title:"Thw monk who sold his farrari",
//         author:"Robin Sharma",
//         releaseDate:"2022-11-13",
//         subject:1
//     }
// ]).then(res=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log("failes to create new record",error);
//     })
// }).catch((error)=>{
//     console.log("unable to create book",error)
// })


//selcting all records
// sequelize.sync().then(()=>
// {
//     console.log("book created successfullly");

//     Book.findAll().then(res=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log("failes to receive all record",error);
//     })
// }).catch((error)=>{
//     console.log("unable to create book",error)
// })

// selecting with a where clause

// const Op = Sequelize.Op;
// sequelize.sync().then(()=>
// {
//     Book.findAll({
//         where:{
//           id:{
//             [Op.between]:[1,3]
//           }
//               // [Op.or] : [ { id: 2 },
//               // { id: 3 }]
          
//         }
//     }).then(res=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log("failes to receive  record",error);
//     })
// }).catch((error)=>{
//     console.log("unable to create book",error)
// })

// selcting all recordsclear

// sequelize.sync().then(()=>
// {
//     console.log("book created successfullly");

//     Book.findAll({attributes:['title',['author','author-name']]}).then(res=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log("failes to receive all record",error);
//     })
// }).catch((error)=>{
//     console.log("unable to create book",error)
// })

//operators examples
sequelize.sync().then(()=>
{
  //1. Update
    // Book.update({author:"Prachi Gupta"},{
    //     where:{
    //     author:"Prachi Khajuria"
    //     }
    // })

  //2. Delete
  // Book.destroy({
  //   where:{
  //   author:"Shivam Gupta"
  //    }
  //  })

   //3.Utility methods
   Book.min('subject')
}).then(res=>{
          console.log("hello",res)
      }).catch((error)=>{
          console.log("failes to receive  record",error);
      })
.catch((error)=>{
    console.log("unable to create book",error)
})
