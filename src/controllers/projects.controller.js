import Project from "../models/Projects.js";
import Task from "../models/Tasks.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
    console.log(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: { id },
    });
    if (!project) return res.status(404).json({ messaje: `Not Project Found` });
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });

    res.json(newProject);
    console.log(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const project = await Project.findByPk(id);

    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    console.log(project);

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.destroy({
      where: {
        id,
      },
    });
    console.log(`Project ${req.params.id} deleted`);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findAll({
    where: { projectId: id },
  });
  res.json(tasks);
};
