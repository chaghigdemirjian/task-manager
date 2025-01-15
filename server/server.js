import express from "express"; // express library is used to create a server. 
import cors from "cors"; // library that enables cross-origin communication (e.g., between front and backend via APIs).

import dotenv from "dotenv"; // library for loading environmen variables from .env files. 
dotenv.config(); // load environment variables from .env file. 

// the task.js file defines an Express router with CRUD operations for 
// interacting with a MongoDB database.
import tasks from "./routes/task.js";

const PORT = process.env.PORT || 5000; // 5000 will be the backend port. 

const app = express(); // creates an express application. 

// cors ensures our backend can respond to requests from a different domain (e.g., frontend). 
app.use(cors({
     origin: "http://localhost:3000"
}));

// express will parse JSON data and turn into a javascript object. 
// and attach to req.body for easy access in route handlers. 
app.use(express.json()); 

// sets up a route for handling requests to /tasks 
// delegating those requests to the routing logic defined in the tasks.js file. 
app.use("/tasks", tasks); // tasks is the base path.

// define a route for "/" URL. 
app.get("/", (req, res) => {
    res.send("Server is up and running! Go to localhost:5000/tasks to see task data.");
});

// starts the express server to listen to incoming requests on the specified port. 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

