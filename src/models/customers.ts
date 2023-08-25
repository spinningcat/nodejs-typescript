'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customers.init({
    name: DataTypes.STRING,
    iso3: DataTypes.STRING,
    iso2: DataTypes.STRING,
    numericCode: DataTypes.INTEGER,
    phoneCode: DataTypes.INTEGER,
    capital: DataTypes.STRING,
    currency: DataTypes.STRING,
    currencySymbol: DataTypes.STRING,
    tld: DataTypes.STRING,
    native: DataTypes.STRING,
    region: DataTypes.STRING,
    subregion: DataTypes.STRING,
    timezones: DataTypes.JSONB,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};