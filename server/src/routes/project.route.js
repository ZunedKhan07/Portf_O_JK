import { Router } from "express";
import { addProject, getProject } from "../controllers/project.controller";

const router = Router();

router.get('/get-projecte', getProject)
router.post('/add-project', addProject)

export default router;