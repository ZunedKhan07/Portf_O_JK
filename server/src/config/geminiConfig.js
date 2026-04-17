import { GenerativeModel } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY)

export const model = genAI.GenerativeModel({
    model: "Gemini 3.1 Flash Lite"
})