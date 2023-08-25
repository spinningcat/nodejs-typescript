'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";
import PermissionTable from "@models/permissinTable"
const AllowedApisTable = sequelize.define("AllowedApisTables", {
  apiMethod: {
    type: Sequelize.STRING,
  },
  apiUrl: {
    type: Sequelize.STRING,

  },
  ptId: {
    type: Sequelize.INTEGER,

  },
},{
});
AllowedApisTable.hasOne(PermissionTable)

export default AllowedApisTable