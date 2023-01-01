const express = require('express');
const dotenv = require('dotenv').config();
const mainRoutes = require('./routes/mainRoutes')

const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Escuchando en puerto ' + process.env.PORT);
})

app.use(mainRoutes)
