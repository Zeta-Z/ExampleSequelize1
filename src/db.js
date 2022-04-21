import {Sequelize} from "sequelize"

const db = new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`,{
    host: "process.env.DB_HOST",
    dialect: "postgres"
});


export default db


/*
{
  "development": {
    "username": "PortalPruebasAdmin",
    "password": "P0rt4lPru3b4sAdm1n2022#",
    "database": "PortalPruebasRH",
    "port": 5432,
    "host": "innovation-dev-port-pruebas-aurora-psql.cluster-cjfwghw6rsy6.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "pool": {
      "max": 2,
      "min": 0,
      "idle":0
    },
    "dialectOptions" : {
      "ssl": "Amazon RDS"
  }
  */




/*
{
  "development": {
    "username": "postgres",
    "password": "Auto2022",
    "database": "sequelizeExample",
    "port": 5432,
    "host": "localhost",
    "dialect": "postgres"
  },
  */