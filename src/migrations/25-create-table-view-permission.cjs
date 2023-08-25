'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TableViewPermissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      columnInfo: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users", 
          key: 'id'
          }
      },
      originTableId: {
        type: Sequelize.INTEGER,
        references: {
          model: "OriginTables", 
          key: 'id'
        }
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
   /* await queryInterface.addConstraint("TableViewPermissions", {
      type: "foreign key",
      fields: ["userId"],
      name: "userId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    }).then(() => queryInterface.addConstraint("TableViewPermissions", {
      type: "foreign key",
      fields: ["origintablesId"],
      name: "originTableId",
      references: {
        table: "OriginTables",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    })).then(() => queryInterface.addConstraint("TableViewPermission", {
      type: "foreign key",
      fields: ["ptId"],
      name: "ptId",
      references: {
        table: "PermissionTables",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    
  }).catch(() => console.log("error occured while creatşng constraints")));*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TableViewPermissions');
  }
};