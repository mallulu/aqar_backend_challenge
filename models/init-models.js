const sqlize = require('../src/config/sqlize');
var DataTypes = require("sequelize").DataTypes;
var _Apartments = require("./Apartments");
var _AvailabilityCalendar = require("./AvailabilityCalendar");
var _Cities = require("./Cities");
var _Districts = require("./Districts");

function initModels(sequelize) {
  var Apartments = _Apartments(sequelize, DataTypes);
  var AvailabilityCalendar = _AvailabilityCalendar(sequelize, DataTypes);
  var Cities = _Cities(sequelize, DataTypes);
  var Districts = _Districts(sequelize, DataTypes);

  AvailabilityCalendar.belongsTo(Apartments, { as: "Apartment", foreignKey: "ApartmentID"});
  Apartments.hasMany(AvailabilityCalendar, { as: "AvailabilityCalendars", foreignKey: "ApartmentID"});
  Apartments.belongsTo(Cities, { as: "City", foreignKey: "CityID"});
  Cities.hasMany(Apartments, { as: "Apartments", foreignKey: "CityID"});
  Districts.belongsTo(Cities, { as: "City", foreignKey: "CityID"});
  Cities.hasMany(Districts, { as: "Districts", foreignKey: "CityID"});
  Apartments.belongsTo(Districts, { as: "District", foreignKey: "DistrictID"});
  Districts.hasMany(Apartments, { as: "Apartments", foreignKey: "DistrictID"});

  return {
    Apartments,
    AvailabilityCalendar,
    Cities,
    Districts,
  };
}
const models = initModels(sqlize);
module.exports = models;