const fs = require('fs')
const path = require('path');

const pathDataBase = path.join(__dirname, '../data/products.json');

const products = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const db = require("../database/models");

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
        idProduct = idProduct - 1;

        let product = products[idProduct];

        res.render('./products/productDetail', { product: product });
    },
    productAdmin: async (req, res) => {
        const brands = await db.Brand.findAll({});
        const categories = await db.Category.findAll({});

        res.render('./products/productAdmin',{marca:brands, category:categories});
    },
    productAdminProducto: async (req, res) => {

        let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            const brands = await db.Brand.findAll({});
            const categories = await db.Category.findAll({});
            return res.render('./products/productAdmin', {
                errors: resultValidation.mapped(), //convierte al array en un objeto literario.
                oldData: req.body, marca: brands, category:categories
            })
        }

        const productStored = await db.Product.create({
            brand_id: req.body.marca,
            category_id: req.body.category,
            image: req.file ? req.file.filename : "",
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            size_id: req.body.talle,
            stock: req.body.stock,
            description: req.body.description,
            /* userId: req.session.userLogged.id */
        });
        return res.redirect("/");



        /* const generateId = () => {
            const lastProduct = products[products.length - 1];
            const lastId = lastProduct.id;
            return lastId + 1;
        } */

/* 
        let productoCreado = {
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

        db.Product.create(productoCreado)
            .then(res.redirect('./')); */


        /* products.push(productoCreado);

        fs.writeFileSync(pathDataBase, JSON.stringify(products, null, ' ')); */


    },
    productEdit: (req, res) => {
        let idProduct = req.params.id;
        idProduct = idProduct - 1;

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
        idProduct = idProduct - 1;

        let editProduct = products[idProduct];

        res.render("./products/productDelete", { editProduct });
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        idProduct = idProduct - 1;
        let productsMenosEliminado = products.filter(productoActual => productoActual.id != idProduct);

        fs.writeFileSync(pathDataBase, JSON.stringify(productsMenosEliminado, null, " "));

        res.render("/");
    }
}

module.exports = controllers;

