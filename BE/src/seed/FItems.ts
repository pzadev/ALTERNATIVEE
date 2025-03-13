import mongoose from "mongoose";
import dotenv from "dotenv";
import FItems from "../data/FItems";
import ItemModel from "../models/ItemsM";


const envFile =
  process.env.NODE_ENV === "test" ? ".env.test" : ".env.deployment";
dotenv.config({ path: envFile });

const mongoUri = process.env.MONGODB_URI || "";

console.log(`🌍 Environment: ${process.env.NODE_ENV}`);

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoUri);

    // Delete all existing people
    await ItemModel.deleteMany();

    // Insert new data
    await ItemModel.insertMany(FItems);
    console.log(`✅ Data seeded successfully in ${process.env.NODE_ENV} mode`);

    // Close connection
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  }
};

seedDB();

export default seedDB;
