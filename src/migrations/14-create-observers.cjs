'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Observers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      processId: {
        type: Sequelize.INTEGER
      },
      processTitle: {
        type: Sequelize.STRING
      },
      countryCode: {
        type: Sequelize.STRING
      },
      casinoId: {
        type: Sequelize.INTEGER
      },
      operationStatus: {
        type: Sequelize.ENUM('disconnected', 'idle', 'listening', 'locked')
      },
      status: {
        type: Sequelize.ENUM('active', 'passive')
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
    await queryInterface.dropTable('Observers');
  }
};