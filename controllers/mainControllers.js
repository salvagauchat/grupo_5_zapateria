const fs = require('fs')
const path = require('path');

const pathDataBase = path.join(__dirname, '../data/products.json')

const productos = JSON.parse(fs.readFileSync(pathDataBase), {encoding: 'utf-8'});

const controllers = {
    index: (req, res) => {
        res.render('index', {
            productos: productos
        })
    },

    login: (req, res) => {
        res.render('./users/login')
    },
    productCart: (req, res) => {

        const productosCarrito = [
            {
                img: 'images/hombre/nike-running-revolution-1.jpg',
                precio: 16599,
                descuento: 10,
                talle: 43
            },
            {
                img: 'images/mujer/reebok-gilde-ripple-1.jpg',
                precio: 7400,
                descuento: 0,
                talle: 36
            },
            {

            }
        ]

        res.render('./products/productCart')
    },
    productDetail: (req, res) => {



        res.render('./products/productDetail')
    },
    register: (req, res) => {
        res.render('./users/register')
    },
    productAdmin: (req, res) => {
        res.render('./products/productAdmin'); 
    },
    productAdminProducto: (req, res) =>{

        let productoCreado = {
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            image: req.body.image,
            talle: req.body.talle 
        }
        productos.push(productoCreado);

        fs.writesFileSync(pathDataBase,JSON.stringify(productos, null, " "));
    
    }, 
    productEdit: (req, res) => {
        res.render('./products/productEdit')
    }
}

module.exports = controllers;