'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    employeId: DataTypes.INTEGER,
    employerId: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  
  };
  return Job;
};