import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cors from 'cors';
import multer  from 'multer'

const app = express();

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();

// Middlewares
app.use(express.json()); // Parse JSON bodies (as built-in middleware)
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
// app.use("../routes/authRoutes",authRoutes);

// Root route for the app
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Coaching App</h1>");
});

// Port configuration with fallback
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
