const express = require("express");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

// declared an express app so we can use express's method
const app = express();

// for req.body
app.use(express.json());

// connect to database
connectDB();

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server is started on", PORT);
});
