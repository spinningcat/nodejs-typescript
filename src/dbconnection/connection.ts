import {auth} from './auth.js'
import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('dev', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
    max: 9,
    min: 0,
    idle: 10000
    }
 });
export default sequelize

