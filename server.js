const express = require('express');
const dotenv = require('dotenv').config();

// declared an express app so we can use express's method
const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server is started on", PORT);
})

