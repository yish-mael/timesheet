'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    description: DataTypes.STRING.
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Activity.associate = function (models) {
    // associations can be defined here
  };
  return Activity;
};