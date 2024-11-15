import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDB;
