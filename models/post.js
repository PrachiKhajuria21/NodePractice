'use strict';
const {
  Model
} = require('sequelize');
// const { FOREIGNKEYS } = require('sequelize/types/query-types');
// const userdata = require('./userdata');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.UserData, {
        foreignKey: 'userId'
      })

      Post.hasMany(models.Comment,{
        foreignKey:'postId'
      })
     
    }
  }
  Post.init({
    postID: DataTypes.INTEGER,
    postName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};