'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productSeller.belongsTo(models.seller,{
        foreignKey:"sellerId"
      })

      productSeller.belongsTo(models.product,{
        foreignKey:"productId"
      })
    }
  }
  productSeller.init({
    productId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'productSeller',
    paranoid:true,
    timestamps:true
  });
  return productSeller;
};