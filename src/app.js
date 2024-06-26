import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
const app = express();

// Middlewares
app.use(express.json());

// Importa las rutas
app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;
