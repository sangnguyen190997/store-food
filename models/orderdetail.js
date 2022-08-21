'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, MenuDetail}) {
      // define association here
      OrderDetail.belongsTo(Order,{
        foreignKey:"orderId",
        as:"orders"
      })

      OrderDetail.belongsTo(MenuDetail,{
        foreignKey:"menuDetailId",
        as:"menuDetails"
      })
    }
  }
  OrderDetail.init({
    orderId: DataTypes.INTEGER,
    menuDetailId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  
  return OrderDetail;
};