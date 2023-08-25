'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.ENUM('bj', 'bac')
      },
      provider: {
        type: Sequelize.ENUM('evolution', 'playTect')
      },
      type: {
        type: Sequelize.ENUM('speed', 'classic')
      },
      minimumBet: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Sources');
  }
};