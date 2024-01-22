import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_products", "root", "root", {
  host: "localhost",
  port: 6033, // Replace 3306 with your MySQL port number
  dialect: "mysql",
  logging: false,
});

export { sequelize };
