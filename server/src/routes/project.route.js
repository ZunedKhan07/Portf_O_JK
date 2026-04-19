import { Router } from "express";
import { addProject, getProject } from "../controllers/project.controller.js";

const router = Router();

router.get('/get-project', getProject)
router.post('/add-project', addProject)

export default router;