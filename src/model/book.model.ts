import { Schema, model } from "mongoose";

const BookSchema = new Schema({
    title: String,
    author: String,
    price: Number
});

export default model("Book", BookSchema);
