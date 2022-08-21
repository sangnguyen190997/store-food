'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({MenuDetail, Store}) {
      // define association here
      Menu.hasMany(MenuDetail, {
        foreignKey:"menuId",
      })
      
      Menu.belongsTo(Store, {
        foreignKey:"storeId",
        as:"stores"
      })
    }
  }
  Menu.init({
    name: DataTypes.STRING,
    storeId: DataTypes.INTEGER,
    ngay: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  
  return Menu;
};