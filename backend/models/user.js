'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dlicense: DataTypes.STRING,
    age: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};