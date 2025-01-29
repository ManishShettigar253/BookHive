import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";    
import booksRoute from "./routes/booksRoute.js";
const app = express();

//middleware for parsing request body
app.use(express.json());

//route for loading home 
app.get('/', (req, res) => {
    //res.send('Hello World');
    return res.status(404).send('Welcome to BookHive');
});

//routes for managing Books
app.use('/books', booksRoute )


//connecting to db and starting server
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });