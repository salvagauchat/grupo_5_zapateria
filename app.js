const express = require('express')
const dotenv = require('dotenv').config();
const path = require('path')
const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

const publicPath = path.resolve(__dirname, './public');

const methodOverride = require('method-override'); 


app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use(mainRoutes);
app.use(userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
})





