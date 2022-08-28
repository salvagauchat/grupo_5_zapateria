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
                img: 'images/hombre/nike-running-revolution-1.jpg',
                precio: 16599,
                descuento: 10,
                talle: [40, 42, 43, 45],
                disponibles: [1, 2, 1, 3]
            },
            {
                img: 'images/hombre/new-balance-arishi-1.jpg',
                precio: 9000,
                descuento: 0,
                talle: [38, 40, 41, 44],
                disponibles: [1, 1, 3, 1]
            },
            {
                img: 'images/mujer/asics-trail-lite-1.jpg',
                precio: 11700,
                descuento: 0,
                talle: [35, 36, 37, 39, 40],
                disponibles: [2, 2, 3, 1, 4]
            },
            {
                img: 'images/mujer/reebok-gilde-ripple-1.jpg',
                precio: 7400,
                descuento: 0,
                talle: [35, 36, 38, 39],
                disponibles: [1, 3, 1, 2]
            },
            {
                img: 'images/hombre/nike-court-vision-mid-1.jpg',
                precio: 12230,
                descuento: 10,
                talle: [39, 41, 43],
                disponibles: [1, 2, 1]
            },
            {
                img: 'images/mujer/adidas-60s-1.jpg',
                precio: 9200,
                descuento: 20,
                talle: [36, 38, 39],
                disponibles: [2, 1, 1]
            },
            {
                img: 'images/niña/adidas-racer-tr21-1.jpg',
                precio: 6662,
                descuento: 20,
                talle: [23, 25, 26, 28],
                disponibles: [1, 2, 1, 3]
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