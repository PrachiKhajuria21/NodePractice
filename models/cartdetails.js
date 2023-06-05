'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

       cartDetails.belongsTo(models.product,{
        foreignKey:"productId"
      })
      cartDetails.belongsTo(models.cart,{
        foreignKey:"cartId"
      })

    }
  }
  cartDetails.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'cartDetails',
  });
  return cartDetails;
};