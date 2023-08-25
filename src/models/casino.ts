'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";

const Casino = sequelize.define("Casinos", {
  title: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,

  },
},{
});

export default Casino