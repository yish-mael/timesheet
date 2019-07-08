'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER.UNSIGNGED,
      allowNull: false
    },
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Project.associate = function (models) {
    // associations can be defined here
  };
  return Project;
};