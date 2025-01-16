// this file will allow us to set up API endpoints. 

import express from "express"; // import express library to handle routes. 
import db from "../db/connection.js"; // imports db object from connection.js to interact w/ the databse. 

// imports ObjectId from MongoDB, which is used to convert string IDs 
// into MongoDBs unique identifier format. 
import { ObjectId } from "mongodb";

// router is an instance of the express router. 
// we will use the router instance to define route handlers like router.get(), router.post(), etc.
// the router will be added as a middleware and will take control of requests starting with path /tasks (see server.js file). 
const router = express.Router();

// this section will help you get a list of all the records.

// sets up an endpoint for GET requests to /tasks.
// when a request is made to /tasks, this code will execute. 
router.get("/", async (req, res) => {
    // accesses the "tasks" collection in the connected MongoDB database. 
    let collection = await db.collection("tasks");

    // finds all documents in the collection (no filter applied).
    // converts the cursor (returned by find) into an array of documents.
    let results = await collection.find({}).toArray();

    // sends the array of documents (results) back to the client as the response.
    // sets the HTTP response status to 200, indicating the request was successful.
    res.status(200).send(results);
});

// this section will help you get a single record by id. 
router.get("/:id", async (req, res) => {
    
    let collection = await db.collection(`tasks`);

    let query = { _id: new ObjectId(req.params.id) };

    let result = await collection.findOne(query);
    
    if (!result) res.status(404).json({ message: "Not Found"});

    else res.status(200).json(result);
});

// this section will enable creating a new record. 
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            title: req.body.title,
            description: req.body.description, 
            priority: req.body.priority,
        };
        let collection = await db.collection("tasks");
        let result = await collection.insertOne(newDocument);
        res.status(201).send(result); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// this section will help update a record by id. 
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                title: req.body.title, 
                description: req.body.description, 
                priority: req.body.priority,
            },
        };
    
        let collection = await db.collection("tasks"); 
        let result = await collection.updateOne(query, updates);
        res.status(200).json({result});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

// this section will help you delete a record. 
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        let collection = await db.collection("tasks");
        let result = await collection.deleteOne(query);
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting record.")
    }
});

export default router;
