'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const LoggerUserInfo = sequelize.define("LoggerUserInfos", {
  userId: {
    type: Sequelize.BIGINT,
  },
  loggerDetailId : {
    type: Sequelize.INTEGER,

  },
  actionTime: {
    type: Sequelize.DATE,

  },
},{
 
 
});

//User.hasMany(Device)
export default LoggerUserInfo