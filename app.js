const express = require('express')
const dotenv = require('dotenv').config();
const path = require('path')
const mainRoutes = require('./routes/mainRoutes')

const app = express()

const publicPath = path.resolve(__dirname, './public')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(mainRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
})





