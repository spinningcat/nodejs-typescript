'use strict';

import Source from "@models/sources"
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Process = sequelize.define("Processes", {
  title : {
    type: Sequelize.STRING,
  },
  sourceId: {
    type: Sequelize.BIGINT,

  },

  resetTimer: {
    type: Sequelize.INTEGER,

  },
  socketId: {
    type: Sequelize.STRING,

  },
  operation_status: {
    type: Sequelize.ENUM('disconnected', 'idle', 'listening', 'locked'),

  },
  status: {
    type: Sequelize.ENUM('active', 'passive'),

  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt: {
    type: Sequelize.DATE
  }
},{
  paranoid : true,
 
});
Process.hasOne(Source)

//User.hasMany(Device)
export default Process
