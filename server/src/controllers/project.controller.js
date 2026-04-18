import Project from "../models/project.model.js";

const getProject = async(req, res) => {
    try {
        const project = await Project.find().sort({ createdAt: -1 });

        if(!projest){
            res.status(401).json({
                success: false,
                message: "Project not Found!"
            })
        }

        res.status(200).json({
            success: true,
            data: project
        })
    } catch (err) {
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
               .jsson({
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
            res.status(400).json({
                seccess: false,
                message: "Something went wrong in creating new project!"
            })
        }
    
        res.status(201).json({
            success: true,
            data: newProject
        })
    } catch (err) {
        console.error(err);

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