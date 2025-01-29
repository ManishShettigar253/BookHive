// config.js

require('dotenv').config();  // Import dotenv to load .env variables

export const PORT = process.env.PORT || 5555;  // You can also define other variables here

export const mongoDBURL = process.env.MONGO_DB_URL;  // Access MongoDB URL from .env
