'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CasinoSources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      sourcesId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Sources", // tables name not model name
          key: 'id'
      }
      },
      casinosId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Casinos", // tables name not model name
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
  /* await queryInterface.addConstraint("CasinosSources", {
      type: "foreign key",
      fields: ["casinosId"],
      name: "casinosId",
      references: {
        table: "Casinos",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
  }).then(() => queryInterface.addConstraint("CasinosSources", {
      type: "foreign key",
      fields: ["sourcesId"],
      name: "sourcesId",
      references: {
        table: "Sources",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    }).catch(() => console.log("error occured while creatşng constraints")));*/
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CasinosSources');
  }
};