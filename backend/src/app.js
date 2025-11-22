import express from "express";

const app = express(); // crete an express app

app.use(express.json()); // to parse json data

// Routes Imports
import userRouter from "./routes/user.route.js";

// Routes Declaration
app.use("api/v1/users", userRouter);

// Example Route: https://localhost:4000/api/v1/users/register

export default app;
