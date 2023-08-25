'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";
import User from "@models/user"
const Device = sequelize.define("Devices", {
  deviceType: {
    type: Sequelize.STRING,
  },
  deviceBrand : {
    type: Sequelize.STRING,

  },
  deviceId: {
    type: Sequelize.STRING,

  },
},{
});
User.hasMany(Device)
export default Device