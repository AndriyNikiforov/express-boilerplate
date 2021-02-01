const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('dev', 'dev', 'dev', {
  dialect: 'postgres',
  host: 'postgres',
});

module.exports = {
  sequelize,
  DataTypes,
  Model,
};
