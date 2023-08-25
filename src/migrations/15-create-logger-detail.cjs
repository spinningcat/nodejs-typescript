'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LoggerDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logDescription: {
        type: Sequelize.STRING
      },
      logType: {
        type: Sequelize.STRING
      },
      logTitle: {
        type: Sequelize.STRING
      },
      repeatationMax: {
        type: Sequelize.INTEGER
      },
      loggerDegree: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('LoggerDetails');
  }
};