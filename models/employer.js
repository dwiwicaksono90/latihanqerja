'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define('Employer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Employer.associate = function(models) {
    // associations can be defined here
    Employer.belongsToMany(models.Employee,{through: models.Job, foreignKey: 'employerId' }) // , foreignKey: 'employerId'
  };
  return Employer;
}; 