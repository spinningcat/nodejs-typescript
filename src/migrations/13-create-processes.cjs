'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Processes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      sourceId: {
        type: Sequelize.INTEGER
      },
      resetTimer: {
        type: Sequelize.INTEGER
      },
      socketId: {
        type: Sequelize.STRING
      },
      operationStatus: {
        type: Sequelize.ENUM('disconnected', 'idle', 'listening', 'locked')
      },
      status: {
        type: Sequelize.ENUM('active', 'passive', 'd')
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
    await queryInterface.dropTable('Processes');
  }
};