const env = {
    database: 'shoparize',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    port: 8889,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  