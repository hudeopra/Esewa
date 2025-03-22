import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    console.log(`MongoDB Connected db.js`);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(`MongoDB error connection db.js`);
    console.error(`Error: ${error.message}`);
  }
}

export { connectDB };