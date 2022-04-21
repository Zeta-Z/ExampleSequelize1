'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userTest_files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userTestId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user_tests',
          key: 'id'
        }
      },
      fileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'files',
          key: 'id'
        }
      },
      statusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userTest_files');
  }
};