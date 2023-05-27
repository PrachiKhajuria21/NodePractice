"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserPost.belongsTo(models.User,{
        foreignKey:"userId"
      })
    }
  }
  UserPost.init(
    {
      userId: DataTypes.INTEGER,
      postName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserPost",
      tableName: "UserPost",
    }
  );
  return UserPost;
};
