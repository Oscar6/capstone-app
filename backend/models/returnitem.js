'use strict';
module.exports = (sequelize, DataTypes) => {
  const returnItem = sequelize.define('returnItem', {
    store: DataTypes.STRING,
    receiptImagePath: DataTypes.STRING,
    itemImagePath: DataTypes.STRING,
    itemName: DataTypes.STRING
  }, {});
  returnItem.associate = function(models) {
    // associations can be defined here
  };
  return returnItem;
};