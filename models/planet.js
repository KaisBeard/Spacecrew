import mongoose from "mongoose";
const { Schema } = mongoose;

const Planet = new Schema({
    "Planet name": String,
});


export default mongoose.model("Planet", Planet)