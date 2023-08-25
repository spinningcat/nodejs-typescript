'use strict';

//import  Sequelize from 'sequelize';
//import sequelize from 'dbconnection/connection'
import sequelize from "../dbconnection/connection"
import { DataTypes, Model, Optional } from 'sequelize'

export enum UserRole {
  admin,
  superUser,
  user,
  appUser,
}

interface UserAttributeInterface {
  id?: number;
  username?:string;
  password?: string;
  role?: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributeInterface, 'id'> {}
export interface UserOuput extends Required<UserAttributeInterface> {}

class User extends Model<UserAttributeInterface, UserInput> implements UserAttributeInterface {
  public id!: number
  public username!: string
  public password!: string
  public role!: UserRole
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
const UserData = User.init({
//const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type:DataTypes.ENUM('admin', 'superUser', 'user', 'appUser')
  }
}, {
  timestamps: true,
  sequelize: sequelize,
  paranoid: true
})
export default UserData




/*const User = sequelize.define("Users", {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,

  },
  role: {
    type: Sequelize.ENUM('admin', 'superUser', 'user', 'appUser'),

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

//User.hasMany(Device)
export default User*/





