require  ('dot env').config();

const express= require ('express');
const mongoose= require ('mongoose')

const app = express();

app.set ('trust Proxy',1);
app.set (express.json());

app.get ('/', (req,res)=>res.json ({message:''}));
app.use ('/categories', require ('routes/categories.js'));
app.use ('/products', require ('routes/products.js'));

const PORT= process.env.port || 3000;

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log ('MongoDB conectado');
    app.listen (port,()=> console.log('servidor en el puerto'+port));
})
.catch (error => console.log ('Error de mongo DB:', error.message));