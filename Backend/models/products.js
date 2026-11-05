const mongoose = require ('mongoose');
const productsSchema = new mongoose.Schema({
    Nombre:{type:string,required:true},
    Descripcion:{type:string,required:true},
    Precio:{type:Number,required:true},
    Stock:{type:Number,default:0},
    Marca:{type:string,required:true}
});

    module.exports = mongoose.model ('Products,productsSchema')