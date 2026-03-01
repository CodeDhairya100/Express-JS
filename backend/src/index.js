import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
})

const startServer = async() => {     //A function to start mongoDB server    
    try {
        await connectDB();

        app.on("error", (error) =>{
            console.log("ERROR", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, ()=>{   // 80, 8000,   HTTPS -> 443
            console.log(`Server is running on port : ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("Database Connection failed!!", err);
    }
}

startServer();