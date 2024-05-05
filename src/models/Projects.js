import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Task from "./Tasks.js";

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});

export default Project;
