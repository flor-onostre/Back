import mongoose from "mongoose";
import Autor from "./AutorModel.js";

const blogSchema = new mongoose.Schema({
    id: { type: String, required: true, unique:true },
    titulo:{ type: String, required: true },
    descripcion:{ type: String, required: true},
    contenido:{ type: String, required: true},
    imagen:{ type: String, required: true },
    fechaPublicacion:{ type: Date, default: new Date },
    isHabilitado: {type: Boolean, default: true},
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'/*, required: true */},
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor'/*, required: true */},
});

const Blog = mongoose.model('Blogs', blogSchema);

export default Blog;