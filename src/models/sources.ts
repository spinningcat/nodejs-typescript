'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Source = sequelize.define("Sources", {
  title: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,

  },
  categoory: {
    type: Sequelize.ENUM('bj', 'bac'),

  },
  povider: {
    type: Sequelize.ENUM('evolution', 'playTect'),

  },
  type: {
    type: Sequelize.ENUM('speed', 'classic'),

  },
  minimumBet: {
    type: Sequelize.INTEGER,

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
export default Source