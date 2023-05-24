const Sequelize = require("sequelize");
const sequelize = new Sequelize("2023_Elite", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection created successfully");
  })
  .catch((error) => {
    console.log("unable to connect", error);
  });
