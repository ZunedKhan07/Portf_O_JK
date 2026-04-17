import mongoose, { Schema } from "mongoose";

const aiChatSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const AIChat = mongoose.model("AIChat", aiChatSchema);

export default AIChat;