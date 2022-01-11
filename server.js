import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import Planet from "./models/planet.js";
import Crewmember from "./models/crewmember.js";
import cors from "cors";

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
 app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json())

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then((e) => console.log("Database connected"))
    .catch((e) => console.log("error", e));


app.get("/planets", (req, res) => {
         Planet.find({})
         .then((result) => res.send(result))
         .catch((e) => res.send(e.message));
 })

 app.get("/crewmembers", (req, res) => {
    Crewmember.find({})
    .then((result) => res.send(result))
    .catch((e) => res.send(e.message));
})

app.listen(3000, () => console.log('Server running on port 3000'));



