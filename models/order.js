'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.customer,{
        foreignKey:"customerId"
      })

      order.hasMany(models.orderDetail,{
        foreignKey:"orderId"
      })
    }
  }
  order.init({
    userId: DataTypes.INTEGER,
    isDelete: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'order',
    paranoid:true,
    timestamps:true
  });
  return order;
};