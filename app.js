const express = require('express')

const app = express()

const path = require('path')

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/product-cart', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})

app.get('/product-detail', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
})





