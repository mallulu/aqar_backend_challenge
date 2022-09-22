const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvailabilityCalendar', {
    AvailabilityCalendarID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ApartmentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Apartments',
        key: 'ApartmentID'
      }
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ToDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AvailabilityCalendar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AvailabilityCalendarID" },
        ]
      },
      {
        name: "AvailabilityCalendarID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AvailabilityCalendarID" },
        ]
      },
      {
        name: "AvailabilityCalendar_ApartmentID_FK_idx",
        using: "BTREE",
        fields: [
          { name: "ApartmentID" },
        ]
      },
    ]
  });
};
