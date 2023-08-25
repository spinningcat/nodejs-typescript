'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Proxies = sequelize.define("Proxies", {
  provider: {
    type: Sequelize.STRING,
  },
  host: {
    type: Sequelize.STRING,

  },
  port: {
    type: Sequelize.STRING,

  },
  username: {
    type: Sequelize.STRING,

  },
  password: {
    type: Sequelize.STRING,

  },
  countryCode: {
    type: Sequelize.STRING,

  },
  type: {
    type: Sequelize.ENUM('single', 'multiple'),

  },
  operationStatus: {
    type: Sequelize.ENUM('available', 'locked'),

  },
  status: {
    type: Sequelize.ENUM('active','passive'),

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
export default Proxies

