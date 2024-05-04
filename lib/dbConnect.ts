import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://ecommerce:g6aB5i84KsFayaL@cluster0.cnrvwvu.mongodb.net/ecommerce"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;
