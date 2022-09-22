const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Apartments', {
    ApartmentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ApartmentName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cities',
        key: 'CityID'
      }
    },
    DistrictID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Districts',
        key: 'DistrictID'
      }
    },
    ApartmentCoordinates: {
      type: "POINT",
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Apartments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ApartmentID" },
        ]
      },
      {
        name: "ApartmentID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ApartmentID" },
        ]
      },
      {
        name: "Apartment_CityID_idx",
        using: "BTREE",
        fields: [
          { name: "CityID" },
        ]
      },
      {
        name: "Apartment_DistrictID_idx",
        using: "BTREE",
        fields: [
          { name: "DistrictID" },
        ]
      },
    ]
  });
};
