require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db');
const route = require('./routes/product-routes')

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/products', route);

//Connect to DB
connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})