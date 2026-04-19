import { model } from "../config/geminiConfig.js";
import AIChat from "../models/aiChat.model.js";
import Project from "../models/project.model.js";

export const chatWithAI = async(req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                message: "Message is required!",
                success: false
            });
        }

        const existing = await AIChat.findOne({ question: message });

        if(existing){
            return res.status(200).json({
                success: true,
                fromCache: true,
                data: existing.answer
            })
        }

        const skills = {
            frontend: [
                "React.js",
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Shadcn UI",
                "Responsive Design",
                "Vite"
            ],
            backend: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT Authentication",
                "WebSockets",
                "Socket.IO",
                "BullMQ",
                "Rate Limiting",
                "MVC Architecture",
                "API Design",
                "Middleware Handling"
            ],
            database: [
                "MongoDB",
                "Mongoose",
                "Database Design",
                "Schema Modeling"
            ],
            opensource: [
                "MDN",
                "freeCodeCamp",
                "Zulip",
                "RocketChat",
                "Facebook/react",
                "CircuitVerse/CircuitVerse",
                "The Odin Project"
            ]
        }

        const buildPrompt = (userQuestion, projects) => {

            const skillText = `
            Frontend: ${skills.frontend.join(", ")}
            Backend: ${skills.backend.join(", ")}
            Database: ${skills.database.join(", ")}
            Open Source: ${skills.opensource.join(", ")}
            `;

            const projectText = projects.map(p => 
                `${p.title}: ${p.description}`
            ).join("\n");

            return `
            You are Juned Khan's AI assistant.

            Your job:
            - Promote Juned professionally
            - Highlight his strengths
            - Convince the recruiter
            - Never speak negatively

            About Juned:
            - MERN Stack Developer
            - Strong in real-time applications using Socket.IO
            - Builds scalable backend systems and AI-powered tools
            - Active in open-source contributions

            Skills:
            ${skillText}

            Projects:
            ${projectText}

            Guidelines:
            - Answer only using the provided data
            - Keep answers clear, concise, and impactful
            - Use a confident and professional tone
            - If asked something unrelated, politely redirect to Juned's skills

            User Question:
            ${userQuestion}

            Answer:
            `;
        };

        const projects = await Project.find();

        const prompt = buildPrompt(message, projects);

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        await AIChat.create({
            question: message,
            answer: response
        });

        res.status(200).json({
            success: true,
            fromCache: false,
            data: response
        })
        
    } catch (err) {
        console.error(err);
        
        res.status(500).json({
            success: false,
            message: "AI Failed"
        })
    }
}