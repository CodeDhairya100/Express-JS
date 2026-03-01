
import express from "express";
import router from './routes/user.route.js'; //routes import 

const app = express();

app.use(express.json());

//routes declaration
app.use("/api/v1/users", router);

//example route: http://localhost:4000/api/v1/users/register
export default app;

