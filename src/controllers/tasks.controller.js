import { where } from "sequelize";
import Task from "../models/Tasks.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id },
      attributes: ["name"],
    });
    if (!task)
      return res.status(404).json({
        message: `Not Task Found`,
      });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
    console.log(newTask);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    // const { name, done } = req.body;
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id },
    });
    task.set(req.body);
    // task.name = name;
    // task.done = done;
    await task.save();
    console.log(task);

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const trash = await Task.destroy({
      where: { id },
    });
    console.log(`Task ${trash} deleted`);
    console.log(`Task ${req.params.id} deleted`);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
