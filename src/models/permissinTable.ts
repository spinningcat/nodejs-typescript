
"use strict"
import User from "./user.js";
import OriginTable from "./origintable";
//import OriginTable from "@/src/models/origintable";
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const PermissionTable = sequelize.define("PermissionTables", {
  writePermission: {
    type: Sequelize.BOOLEAN,
  },
  readPermission: {
    type: Sequelize.BOOLEAN,
  },
  createPermission: {
    type: Sequelize.BOOLEAN,
  },
  deletePermission: {
    type: Sequelize.BOOLEAN,
  },
  password: {
    type: Sequelize.STRING,

  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

},{
});
PermissionTable.hasMany(User)
PermissionTable.hasMany(OriginTable)

export default PermissionTable




