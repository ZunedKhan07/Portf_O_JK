import { Router } from "express";
import AIChat from "../models/aiChat.model.js";
import { chatWithAI } from "../controllers/aiChat.controller.js";

const router = Router();

router.post('/ai-chat', chatWithAI);

export default router;