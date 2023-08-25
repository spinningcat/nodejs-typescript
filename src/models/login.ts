'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Login = sequelize.define("Logins", {
  userId: {
    type: Sequelize.BIGINT,
  },
  deviceId : {
    type: Sequelize.INTEGER,

  },
  loginTine: {
    type: Sequelize.DATE,

  },
  logoutTime: {
    type: Sequelize.DATE,

  },
  sessionId: {
    type: Sequelize.INTEGER,

  },
  tokenId: {
    type: Sequelize.STRING,

  },
  status: {
    type: Sequelize.BOOLEAN,

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
export default Login