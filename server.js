const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHanlder = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// declared an express app so we can use express's method
const app = express();

// for req.body
app.use(express.json());

// connect to database
connectDB();

// middleware for all errors
app.use(errorHanlder);

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server is started on", PORT);
});
