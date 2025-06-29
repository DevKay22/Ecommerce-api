const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(
           'mongodb+srv://drkay4sure:drkay4sure01@cluster0.3zqjdxh.mongodb.net/' 
        )
        console.log('Mongodb connected successfully');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;