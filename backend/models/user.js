'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    driversLicenseNumber: DataTypes.STRING,
    dob: DataTypes.STRING,
    carYear: DataTypes.INTEGER,
    carMake: DataTypes.STRING,
    carModel: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};