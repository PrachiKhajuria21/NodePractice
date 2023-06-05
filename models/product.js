'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.productCategory,{
        foreignKey:"customerId"
      })

      product.hasMany(models.orderDetails,{
        foreignKey:"productId"
      })

      product.hasMany(models.cartDetails,{
        foreignKey:"productId"
      })


      product.belongsToMany(models.seller,
        {foreignKey:"productId",through:"productSeller"})
    }
  }
  product.init({
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product',
    paranoid:true,
    timestamps:true
  });
  return product;
};