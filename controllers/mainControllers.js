
const productos = [
    {
        img: 'images/hombre/nike-running-revolution-1.jpg',
        nombre: 'Nike Revolution 6NN',
        precio: 16599,
        descuento: 10,
        talle: [40, 42, 43, 45],
        disponibles: [1, 2, 1, 3],
        categoria: "destacado"
    },
    {
        img: 'images/hombre/new-balance-arishi-1.jpg',
        nombre: 'New Balance Running Fresh Foam Greem Leaf',
        precio: 9000,
        descuento: 0,
        talle: [38, 40, 41, 44],
        disponibles: [1, 1, 3, 1],
        categoria: "destacado"
    },
    {
        img: 'images/mujer/asics-trail-lite-1.jpg',
        nombre: 'Asics Trail Running Fuji Lite 2',
        precio: 11700,
        descuento: 0,
        talle: [35, 36, 37, 39, 40],
        disponibles: [2, 2, 3, 1, 4],
        categoria: "destacado"
    },
    {
        img: 'images/mujer/reebok-gilde-ripple-1.jpg',
        nombre: 'Reebok Royal Gilde Ripple CLP',
        precio: 7400,
        descuento: 0,
        talle: [35, 36, 38, 39],
        disponibles: [1, 3, 1, 2],
        categoria: "destacado"
    },
    {
        img: 'images/hombre/nike-court-vision-mid-1.jpg',
        nombre: 'Nike Court Vision Mid',
        precio: 12230,
        descuento: 10,
        talle: [39, 41, 43],
        disponibles: [1, 2, 1],
        categoria: "oferta"
    },
    {
        img: 'images/mujer/adidas-60s-1.jpg',
        nombre: 'Adidas 60S 2.0',
        precio: 9200,
        descuento: 20,
        talle: [36, 38, 39],
        disponibles: [2, 1, 1],
        categoria: "oferta"
    },
    {
        img: 'images/niña/adidas-racer-tr21-1.jpg',
        nombre: 'Adidas Racer TR21 Niña',
        precio: 6662,
        descuento: 20,
        talle: [23, 25, 26, 28],
        disponibles: [1, 2, 1, 3],
        categoria: "oferta"
    },
    {
        img: 'images/niño/adidas-velcro-advantage-1.jpg',
        nombre: 'Adidas Velcro Niño',
        precio: 7662,
        descuento: 10,
        talle: [23, 24, 27, 28],
        disponibles: [1, 2, 1, 3],
        categoria: "oferta"
    }
]


const controllers = {
    index: (req, res) => {
        res.render('index', {
            productos:productos.forEach(producto => {
                if (producto.categoria === "oferta") {
                    oferta.push(producto)
                } else {
                    destacado.push(producto)
                }
            })
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
        res.render('./products/productAdmin')
    },
    productEdit: (req, res) => {
        res.render('./products/productEdit')
    }
}

module.exports = controllers;