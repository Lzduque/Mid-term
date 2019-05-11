//this database matches .env but have to define the variables DB...etc

require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DATABASE_URL,
      user     : process.env.DATABASE_URL,
      password : process.env.DATABASE_URL,
      database : process.env.DATABASE_URL,
      port     : process.env.DATABASE_URL,
      ssl      : process.env.DATABASE_URL
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};


