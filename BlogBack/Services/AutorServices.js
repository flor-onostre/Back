import Autor from "../models/AutorModel.js"
import crypto from "crypto"

export const getsAutores = async () => {
    const autores = await Autor.find({isHabilitado: true});
    return autores
}

export const getAutor = async (id) => {
    const autor = await Autor.findOne({id:id});
    return autor
}

export const postAutor = async (nombre,fechaNacimiento,redSocial,fotoPerfil) => {
    const autor = await Autor.create({id:crypto.randomUUID(),nombre,fechaNacimiento,redSocial,fotoPerfil});
    return autor
}

export const putAutor = async (id,nombre,fechaNacimiento,redSocial,fotoPerfil) => {
    const autor = await Autor.findOneAndUpdate({id:id},{nombre,fechaNacimiento,redSocial,fotoPerfil})
    return autor
}

export const deleteAutor = async (id) => {
    const autor = await Autor.findOneAndUpdate({id:id},{isHabilitado:false});
    return autor
}