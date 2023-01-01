const express = require('express');
const productsRoutes = require('./routes/productsRoutes');
const dotenv = require('dotenv').config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto ' + process.env.PORT);
});

app.use('/products', productsRoutes);