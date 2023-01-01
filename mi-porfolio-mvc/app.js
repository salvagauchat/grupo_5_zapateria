const express = require('express');

const productsRoutes = require('./routers/productsRoutes');

const dotenv = require('dotenv').config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto ' + process.env.PORT);
});
//Crear el archivo '.env' 
//Escribir dentro 'PORT = 3000'
//Instalar 'npm i dotenv'
//Por ultimo requerir el dotenv en el archivo 'app.js'
//No olvidar al final poner '.config()'                                                     

app.use('/products', productsRoutes);







