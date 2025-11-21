import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

// load environment variables from .env file
dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error(`Error: ${error.message}`);
            throw error
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`\n Server is running on port: ${process.env.PORT || 8000}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed!!", err);
    }
}

startServer();
