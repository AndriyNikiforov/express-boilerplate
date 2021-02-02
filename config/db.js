const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('emp', 'root', 'root', {
  dialect: 'postgres',
  host: 'postgres',
  port: 5432,
});

const checkDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};

checkDb();

module.exports = {
  sequelize,
  DataTypes,
  Model,
};
