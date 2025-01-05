const mongoose = require('mongoose');
require('dotenv').config();  // Make sure this line is at the top to load the .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

module.exports = connectDB;
