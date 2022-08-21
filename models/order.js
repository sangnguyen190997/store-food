'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, OrderDetail}) {
      // define association here
      Order.belongsTo(User,{
        foreignKey:"userId",
        as:"users"
      }),
      Order.hasMany(OrderDetail,{
        foreignKey:"orderId",
        as:"orders"
      })
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    orderDetailId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  
  return Order;
};