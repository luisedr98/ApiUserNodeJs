import * as dotenv from "dotenv";
import express from "express";
import { sequelize } from "./config/database.js";
import userRoutes from "./routes/index.js";

// * allow to get information from .env file
dotenv.config();

// * import express api
const app = express();

// * define the port to run app
const port = process.env.PORT || 8000;

// * send the port to start server
app.listen(port, () => {
    console.log("app start on port " + port);
});

// * connect with database
try {
    await sequelize.authenticate();
    console.log("Database connection succesfull!");
} catch (error) {
    console.log(error);
}

//* allow to read the body in the request
app.use(express.json());

//* define the routes
app.use("/", userRoutes);
