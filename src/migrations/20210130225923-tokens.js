module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tokens', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          table: 'users',
          field: 'id',
        },
      },
      token: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      type: {},
      is_revoked: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    }).then(() => queryInterface.addIndex('tokens', ['token']));
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tokens');
  },
};
