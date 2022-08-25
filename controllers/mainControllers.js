const controllers = {
    index: (req, res) => {
        res.render('index')
    },
    login: (req, res) => {
        res.render('login')
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
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    register: (req, res) => {
        res.render('register')
    },
}

module.exports = controllers;