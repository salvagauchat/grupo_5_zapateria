const fs = require('fs')
const path = require('path');

const pathDataBase = path.join(__dirname, '../data/products.json');

const products = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const { validationResult } = require('express-validator');

const controllers = {
    index: (req, res) => {
        res.render('index', {
            productos: products
        })
    },
    productCart: (req, res) => {

        res.render('./products/productCart')
    },
    productDetail: (req, res) => {

        let idProduct = req.params.id;
        idProduct = idProduct-1;
    
        let product = products[idProduct];

        res.render('./products/productDetail', {product:product});
    },
    productAdmin: (req, res) => {
        res.render('./products/productAdmin');
    },
    productAdminProducto: (req, res) => {

        let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('./products/productAdmin', {
                errors: resultValidation.mapped(), //convierte al array en un objeto literario.
                oldData: req.body
            })
        }

        const generateId = () => {
            const lastProduct = products[products.length - 1];
            const lastId = lastProduct.id;
            return lastId + 1;
        }


        let productoCreado = {
            id: generateId(),
            marca: req.body.marca,
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            image: req.body.image,
            talle: req.body.talle
        }
        if (req.files) {
            productoCreado.image = req.files.map(file => file.filename);
        }

        

        products.push(productoCreado);

        fs.writeFileSync(pathDataBase, JSON.stringify(products, null, ' '));

        res.redirect('./');
    },
    productEdit: (req, res) => {
        let idProduct = req.params.id;
        idProduct = idProduct-1;
    
        let editProduct = products[idProduct];

        res.render("./products/productEdit", { editProduct });

    },
    edit: (req, res) => {

        let idProduct = req.params.id;
        idProduct = idProduct;
        

        let productoEditado = {
            id: idProduct,
            marca: req.body.marca,
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            image: req.body.image,
            talle: req.body.talle
        }

        products.forEach(elementoActual => {
            if (elementoActual.id == idProduct) {
                elementoActual.name = productoEditado.name
                elementoActual.price = productoEditado.price
                elementoActual.discount = productoEditado.discount
                elementoActual.category = productoEditado.category,
                elementoActual.talle = productoEditado.talle
            }
        });
        
        console.log(productoEditado);

        fs.writeFileSync(pathDataBase, JSON.stringify(products, null, " "));

        res.redirect("/");

    },
    productDelete: (req, res) => {

        let idProduct = req.params.id;
        idProduct = idProduct -1;
        
        let editProduct = products[idProduct];

        res.render("./products/productDelete", { editProduct });
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        idProduct = idProduct-1;
        let productsMenosEliminado = products.filter(productoActual => productoActual.id != idProduct);

        fs.writeFileSync(pathDataBase, JSON.stringify(productsMenosEliminado, null, " "));

        res.render("/");
    }
}

module.exports = controllers;

