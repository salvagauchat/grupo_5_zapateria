const fs = require('fs')
const path = require('path');

const pathDataBase = path.join(__dirname, '../data/products.json');

const products = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const controllers = {
    index: (req, res) => {
        res.render('index', {
            productos: products
        })
    },

    login: (req, res) => {
        res.render('./users/login')
    },
    productCart: (req, res) => {

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
    productAdminProducto: (req, res) => {

        const generateId = () => {
            const lastProduct = products[products.length - 1];
            const lastId = lastProduct.id;
            return lastId + 1;
        }


        let productoCreado = {
            id: generateId(),
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

        res.redirect('/');
    },
    productEdit: (req, res) => {
        res.render('./products/productEdit')
    },
    edit: (req, res) => {
        const productId = Number(req.params.id);

        const theProduct = products.find(thisProduct => thisProduct.id === productId);

        return res.render('./products/productEdit', {
            product: theProduct,
        });

    }
}

module.exports = controllers;

