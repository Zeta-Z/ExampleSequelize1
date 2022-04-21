import {Sequelize} from "sequelize"

const db = new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`,{
    host: "process.env.DB_HOST",
    dialect: "postgres"
});


export default db


/*
{
  "development": {
    "username": "????",
    "password": "????,
    "database": "????",
    "port": 5432,
    "host": "localhost",
    "dialect": "postgres"
  },
  */
