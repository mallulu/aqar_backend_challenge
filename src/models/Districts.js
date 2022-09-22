const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Districts', {
    DistrictID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DistrictName: {
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
    }
  }, {
    sequelize,
    tableName: 'Districts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DistrictID" },
        ]
      },
      {
        name: "DistrictID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DistrictID" },
        ]
      },
      {
        name: "CityID_FK_idx",
        using: "BTREE",
        fields: [
          { name: "CityID" },
        ]
      },
    ]
  });
};
