module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      bio: Sequelize.DataTypes.TEXT,
      tags: Sequelize.DataTypes.TSVECTOR,
      team_id: Sequelize.DataTypes.INTEGER,
      additional_info: Sequelize.DataTypes.JSON,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};