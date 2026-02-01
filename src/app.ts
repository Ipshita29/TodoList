import express, { Express } from "express";
import mongoose from "mongoose";
import bookRoutes from "../src/routes/book.routes";

class App {
    app: Express;
    port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());
    }

    connectDB() {
        mongoose.connect("mongodb://127.0.0.1:27017/simple_oop_ts")
            .then(() => console.log("DB connected"))
            .catch((err) => console.log(err));
    }

    setRoutes() {
        this.app.use("/books", bookRoutes);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on ${this.port}`);
        });
    }
}

export default App;
