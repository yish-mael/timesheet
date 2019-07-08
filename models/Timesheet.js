'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    userId: {
      type: DataTypes.INTEGER.UNSINGED,
      allowNull: false
    },
    date: DataTypes.DATE,
    activityId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    timeFrom: DataTypes.TIME,
    timeTo: DataTypes.TIME
  }, {});
  Timesheet.associate = function (models) {
    // associations can be defined here
  };
  return Timesheet;
};