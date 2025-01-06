import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect( process.env.MONGO_NAME, {});
      console.log('Conexión a la base de datos exitosa');
    } catch (err) {
      console.error('Error conectando a la base de datos:', err);
    }
  };

export default connectDB