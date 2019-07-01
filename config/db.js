const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, options);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Connected to mLab DB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
