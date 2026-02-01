import App from "./src/app";

const app = new App(3000);

app.connectDB();
app.setRoutes();
app.start();
