import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "ch1ch3", {
  host: "localhost",
  dialect: "postgres",
});
