import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect_DB from './config/db.js';

dotenv.config();

connect_DB()

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(` ✅ Server running on http://localhost:${port}`);  
})