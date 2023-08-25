const sequelize = new Sequelize('OPMAS', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  });

   






