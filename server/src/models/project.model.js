import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    githubLink: {
        type: String
    },
    techStack: {
        type: [String]
    },
    liveLink: {
        type: String
    }
},
    { timestamps: true }
)

const Project = mongoose.model("Project", projectSchema);
export default Project;