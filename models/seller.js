'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seller.belongsToMany(models.product,
        {foreignKey:"sellerId",through:"productSeller"})
    }
  }
  seller.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    store: DataTypes.STRING,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'seller',
    paranoid:true,
    timestamps:true
  });
  return seller;
};