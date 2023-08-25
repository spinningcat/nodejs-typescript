'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";
import User from "@models/user"
//import OriginTable  from "../models//origintable";
//import PermissinTable from "../models/permissinTable";
import OriginTable  from "@models/origintable";
import PermissinTable from "@models/permissinTable";
const TableViewPermission = sequelize.define("TableViewPermission", {
  columnInfo: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.BIGINT,
  },
  sourTableId: {
    type: Sequelize.BIGINT,
  },
  ptId: {
    type: Sequelize.BIGINT,
  },

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

},{});

TableViewPermission.hasMany(User)
TableViewPermission.hasMany(OriginTable)
TableViewPermission.hasMany(PermissinTable)

export default TableViewPermission