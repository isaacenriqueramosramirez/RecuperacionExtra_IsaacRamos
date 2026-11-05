const mongoose = require ('mongoose');
const categotiesSchema = new mongoose.Schema({
    Nombre:{type:string,required:true},
    Descripcion:{type:string,required:true},
    Estado:{type:String,required:true}
 
});

    module.exports = mongoose.model ('categories,categotiesSchema')