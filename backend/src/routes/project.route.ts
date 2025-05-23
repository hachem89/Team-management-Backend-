import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getAllProjectsController,
  getProjectAnalyticsController,
  getProjectByIdAndWorkspaceIdController,
  updateProjectController,
} from "../controllers/project.controller";

const projectRoutes = Router();

projectRoutes.post("/workspace/:workspaceId/create", createProjectController);

projectRoutes.put("/:id/workspace/:workspaceId/update",updateProjectController)

projectRoutes.delete("/:id/workspace/:workspaceId/delete",deleteProjectController)

projectRoutes.get("/workspace/:workspaceId/all", getAllProjectsController);

projectRoutes.get(
  "/:id/workspace/:workspaceId",
  getProjectByIdAndWorkspaceIdController
);

projectRoutes.get(
    "/:id/workspace/:workspaceId/analytics",
    getProjectAnalyticsController
  );
export default projectRoutes;
