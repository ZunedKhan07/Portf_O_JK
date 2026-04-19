import Project from "../models/project.model.js";

const getProject = async(req, res) => {
    try {
        const project = await Project.find().sort({ createdAt: -1 });

        if (!project || project.length === 0) {
            return res.status(200).json({
                success: true,
                data: []
            });
        }

        res.status(200).json({
            success: true,
            data: project
        })
    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch projects"
        })
    }
}

const addProject = async(req, res) => {
    try {
        const { title, description, techStack, githubLink, liveLink } = req.body;
    
        if(!title){
            res.status(404)
               .json({
                    success: false,
                    message: "title is required!"
               })
        }
    
        const newProject = await Project.create({
            title,
            description,
            techStack,
            githubLink,
            liveLink
        })
    
        if(!newProject){
            return res.status(400).json({
                success: false,
                message: "Something went wrong in creating new project!"
            })
        }
    
        res.status(201).json({
            success: true,
            data: newProject
        })
    } catch (err) {
        console.error("ERROR : ", err);

        res.status(500).json({
            success: false,
            message: "Failed to create project"
        })
    }
}

export {
    getProject,
    addProject
}