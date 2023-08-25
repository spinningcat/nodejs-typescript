'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const LoggerDetail = sequelize.define("LoggerDetails", {
  logDescription: {
    type: Sequelize.STRING,
  },
  logType : {
    type: Sequelize.STRING,

  },
  logTitle: {
    type: Sequelize.STRING,

  },
  repeatationMax: {
    type: Sequelize.INTEGER,

  },
  loggerDegree: {
    type: Sequelize.INTEGER,

  },
},{
 
 
});

//User.hasMany(Device)
export default LoggerDetail