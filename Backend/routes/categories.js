const express = require ('express');
const categories = require('../models/categories');

const router = express.Router();


//crear
router.post ('/', async (req, res)=>{
    try{
        const nuevo = await categories.create (req.body);
        res.status (201).json (nuevo)
    }catch(error){
        res.status (400).json ({messsage:'error categoria no creado'});
    }
});

//leer todo 

router.get ('/', async (req,res)=> {
    const lista = await categories.find();
    res.json (lista)
});

//Actualizar 

router.put ('/:id',async (req,res)=> {
    try{
        const editado = await categories.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        });
        if(!editado)return res .status (404).json ({message:"no encontrado"});
        res.json (editado);
    }catch(error){
        res.status (400).json ({message:error.message});
    }
}); 

// Eliminar 

router.delete ('/:id',async (req,res)=> {
    try {
        const Eliminado = await categories.findByIdAndDelete
        (req.params.id);

        if(!Eliminado)return res.status(400).json ({message:'No encontrado'});
        res.json ({message:'categoria eliminado'});
    }catch (error){
        res.status (400).json ({message:'id no valido'});
    }
});
module.exports = router;

