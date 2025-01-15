import dotenv from 'dotenv'; // library for loading environment variables from .env files.
dotenv.config(); // reads and loads environment variables from .env file. 

// MongoClient is used to interact with the MongoDB database, while
// serverApiVersion defines which version of the MongoDB API to use for interactions.
import { MongoClient, ServerApiVersion } from "mongodb";

// retrieve MongoDB connection string (URI) from the ATLAS_URI environment variable from .env file. 
const URI = process.env.ATLAS_URI || ""; 

// error check if URI is loading as expected. 
if (!URI) {
    throw new Error("MongoDB URI not provided in environment variables.");
}

// creates an instance of MongoClient with the URI for the MongoDB server and additional configuration options.
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true, 
    }
});

const connectToDatabase = async () => {
    try {
        // connect to MongoDB server asynchronously. 
        await client.connect();

        // executes a ping command on the admin database to check if the connection is successful. 
        await client.db("admin").command({ ping: 1 });

        // if the ping is successful, this message is logged. 
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.error(err);
    }
};

await connectToDatabase(); // ensure the database is connected before proceeding. 

// once connected, this line either selects the "tasks" database
// if the database doesn't exist, MongoDB will create it when data is written to it. 
const db = client.db("tasks");

export default db;