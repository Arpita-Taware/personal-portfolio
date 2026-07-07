const Project = require("../models/Project");

// GET all projects
exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// CREATE project
exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};