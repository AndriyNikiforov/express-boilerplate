const { sequelize: Sequelize, DataTypes, Model } = require('../../config/db');

class User extends Model { }

User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  bio: DataTypes.TEXT,
  tags: DataTypes.TSVECTOR,
  team_id: DataTypes.INTEGER,
  additional_info: DataTypes.JSON,
}, {
  sequelize: Sequelize,
  modelName: 'User',
});

module.exports = User;
