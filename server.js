require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db')

const app = express();

app.use(express.json())

//Connect to DB
connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})