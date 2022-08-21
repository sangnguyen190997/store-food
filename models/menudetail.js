'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({OrderDetail, Menu}) {
      // define association here
      MenuDetail.hasMany(OrderDetail,{
        foreignKey:"menuDetailId",
        as:"menuDetails"
      })

      MenuDetail.belongsTo(Menu, {
        foreignKey:"menuId",
        as:"menus"
      })

    }
  }
  MenuDetail.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    menuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MenuDetail',
  });
  
  return MenuDetail;
};