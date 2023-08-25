'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Observer = sequelize.define("Observers", {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,

  },
  processId: {
    type: Sequelize.INTEGER,

  },
  processTitle: {
    type: Sequelize.STRING,

  },
  contryCode: {
    type: Sequelize.INTEGER,

  },
  casinoId: {
    type: Sequelize.STRING,

  },
  operationStatus: {
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

},{
 
 
});

//User.hasMany(Device)
export default Observer