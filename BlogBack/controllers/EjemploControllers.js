import Ejemplo from "../models/EjemploModel.js";

const ejemploController = {

    getEjemplo: async (req, res) => {
        try {
            const ejemplo = await Ejemplo.find();
            res.status(200).json(ejemplo);
        } catch (error) {    
            res.status(500).json({ message: 'Error al obtener el ejemplo', error });
        }
    },

    createEjemplo: async (req, res) => {
        const { name } = req.body;
        try {
            const ejemplo = new Ejemplo({ name });
            await ejemplo.save();
            res.status(201).json({ message: 'Ejemplo creado', ejemplo });
        } catch (error) {
            res.status(400).json({ message: 'Error al crear el ejemplo', error });
        }
    },


};

export default ejemploController;