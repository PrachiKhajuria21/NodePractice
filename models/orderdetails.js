'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderDetails.belongsTo(models.product,{
        foreignKey:"productId"
      })
      orderDetails.belongsTo(models.order,{
        foreignKey:"orderId"
      })
      
    }
  }
  orderDetails.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orderDetails',
    paranoid:true,
    timestamps:true
  });
  return orderDetails;
};