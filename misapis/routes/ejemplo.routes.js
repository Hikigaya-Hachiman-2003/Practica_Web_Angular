import { Router } from "express";
import {
    getAllEjemplos,
    getEjemploById,
    postEjemplo,
}from '../controllers/ejemplo.controller.js'

const ejemplo = Router();

ejemplo.get('/', getAllEjemplos);

ejemplo.get('/:id', getEjemploById);
    

ejemplo.put('/:id',(req,res)=>{
    const body = req.body;
    res.json({
        msg: 'put ApI',
        body
    })
});

ejemplo.post('/',postEjemplo);

ejemplo.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'delete ApI'
    })
});

export default ejemplo;