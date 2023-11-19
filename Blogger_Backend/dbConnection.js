import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dbFunc = async() => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  return await mongoose.connect(process.env.MONGO_URI, options)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
};

const db = dbFunc();

export default db;



