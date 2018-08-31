'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.belongsToMany(models.Employer, {through: models.Job, foreignKey: 'employeId'}) // 
  };
  return Employee;
};