'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AllowedApisTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      apiMethod: {
        type: Sequelize.STRING
      },
      apiUrl: {
        type: Sequelize.STRING
      },
      ptId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PermissionTables", 
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
  /*  await queryInterface.addConstraint("AllowedApisTables", {
      type: "foreign key",
      fields: ["ptId"],
      name: "ptId",
      references: {
        table: "PermissionTables",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
  })*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AllowedApisTables');
  }
};