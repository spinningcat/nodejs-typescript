'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PermissionTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      writePermission: {
        type: Sequelize.BOOLEAN
      },
      readPermission: {
        type: Sequelize.BOOLEAN
      },
      readPermission: {
        type: Sequelize.BOOLEAN
      },
      deletePermission: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.BIGINT,
        references: {
            model: "Users", // tables name not model name
            key: 'id'
        }
      },
      sourceId: {
        type: Sequelize.BIGINT,
        references: {
          model: "OriginTables", // tables name not model name
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
    /*await queryInterface.addConstraint("PermissionTables", {
        type: "foreign key",
        fields: ["userId"],
        name: "userId",
        references: {
          table: "Users",
          field: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
    }).then(() => queryInterface.addConstraint("PermissionTables", {
        type: "foreign key",
        fields: ["origintablesId"],
        name: "origintablesId",
        references: {
          table: "OriginTables",
          field: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      }).catch(() => console.log("error occured while creatşng constraints")));*/
    },
   async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PermissionTables');
  }
};