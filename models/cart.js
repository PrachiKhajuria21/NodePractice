'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.customer,{
        foreignKey:"customerId"
      })

      cart.hasMany(models.orderDetails,{
        foreignKey:"cartId"
      })

    }
  }
  cart.init({
    userId: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'cart',
    paranoid:true,
    timestamps:true
  });
  return cart;
};