'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.hasOne(models.cart,{
        foreignKey:"customerId"
      })

      customer.hasMany(models.order,{
        foreignKey:"customerId"
      })
    }
  }
  customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isDelete: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'customer',
    paranoid:true,
    timestamps:true
  });
  return customer;
};