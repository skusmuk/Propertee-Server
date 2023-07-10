module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Sarajev@97",
    DB: "propertee-app-dev-local-publicdata",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }, 
    port: 5432,
  };