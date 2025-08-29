import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.DB_URI;
    if (!uri) throw new Error("DB_URI is not set");

    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME,
    });
    
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
