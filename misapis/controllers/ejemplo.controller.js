import Ejemplo from "../models/ejemplo.model.js";
import mongoose from "mongoose";
import express from 'express';
import ejemplo from './../routes/ejemplo.routes.js';

export const getAllEjemplos = async (req, res) => {
    console.log('obtiene todo los ejemplos');
    try {
        const ejemplos = await Ejemplo.find({},{__v:0});
       if(ejemplos.length === 0){
        return res.status(404).json({
            msg: 'No se encontraron ejemplos'
        });
       }
       return res.status(200).json({
        ejemplos
       
       });
    } catch (error) {
        res.status(500).json({ 
            msg: 'Error al obtener los ejemplos' });
    }
};

export const getEjemploById = async (req, res) => {
    console.log('Ejemplo por ID');
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'El ID no es valido'
            });
        }

        const ejemplo = await Ejemplo.findById(id);
        if(!ejemplo){
            return res.status(404).json({
                msg: 'No se encontro el ejemplo'
            });
        }

        return res.status(200).json({
            ejemplo
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el ejemplo'
        });
        
    }
   
};

export const postEjemplo = async (req, res) => {
    console.log('Post Ejemplo');
    const body = req.body;
    const ejemplo = new Ejemplo(body);
    try {
        const validationError = ejemplo.validateSync();
        if(validationError){
            const errorMessages = Object.values(validationError.errors).map((error) => error.message);
            return res.status(400).json({
                error: errorMessages
                
            });
        }
        await ejemplo.save();
        return res.status(201).json({
            ejemplo
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar ejemplo'
        });
    }
};
