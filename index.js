import "dotenv/config";
import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const port = process.env.PORT || 8000;

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is missing. Check your .env file.");
  process.exit(1);
}

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

const mongoClient = await connectToMongoDB();
const db = mongoClient.db("rentora_studio");
const addStudioCollection = db.collection("add-studio");
const bookingCollection = db.collection("booking");



// const bookingCollection = db.collection("booking");

app.get('/', (req, res) => {
    res.send({message: 'Server is running'})
});

app.post("/addStudioCollection", async (req, res) => {
    try {
        const result = await addStudioCollection.insertOne(req.body);
        res.status(201).send({ result });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Could not save the studio" });
    }
});

app.get('/StudioData', async (req, res) => {
    try {
    const result = await addStudioCollection.find().toArray();
    res.status(200).send( result );
} catch (err) {
    console.error(err);
    res.status(500).send({ message: "Could not load studios." });
}

});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})