'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const OriginTable = sequelize.define("OriginTables", {
  origin: {
    type: Sequelize.STRING,
  },
 },{
});

//User.hasMany(Device)
export default OriginTable