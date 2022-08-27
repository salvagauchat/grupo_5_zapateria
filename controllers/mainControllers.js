const controllers = {
    index: (req, res) => {
        res.render('index')
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    productCart: (req, res) => {
        const productos = [
            {
                img: 'images/calzado-deportivo/hombre/Nike Court Vision Mid 1',
                precio: 16599,
                descuento: 10,
                talle: [40, 42, 43, 45]
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
}

module.exports = controllers;