import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY)

export const model = genAI.getGenerativeModel({
    model: "Gemini 3.1 Flash Lite"
})