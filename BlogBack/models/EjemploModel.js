import mongoose from "mongoose";

const ejemploSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Ejemplo = mongoose.model('Ejemplos', ejemploSchema);

export default Ejemplo;