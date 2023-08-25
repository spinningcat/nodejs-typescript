'use strict';
import  Sequelize from 'sequelize';
import sequelize from "dbconnection/connection";
import Source from "@models/sources.js";
import Casino from "@models/casino.js"
const CasinoSource = sequelize.define("CasinoSource", {
  sourcesId: {
    type: Sequelize.BIGINT,
  },
  casinosId : {
    type: Sequelize.BIGINT,

  },
},{
});

CasinoSource.hasMany(Source)
CasinoSource.hasMany(Casino)

export default CasinoSource