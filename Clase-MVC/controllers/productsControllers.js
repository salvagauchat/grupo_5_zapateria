const productsModel = require('../models/productsModel');

const productos = [
    {
        id: 1,
        name: 'Prod-1',
        description: 'Desc-1'
    },
    {
        id: 2,
        name: 'Prod-2',
        description: 'Desc-2'
    },
    {
        id: 3,
        name: 'Prod-3',
        description: 'Desc-3'
    },
    {
        id: 4,
        name: 'Prod-4',
        description: 'Desc-4'
    },
]

const controller = {
    sendAll: (req, res) => {
        res.send(productos);
    },

    sendById: (req, res) => {
        console.log('Send by id')
        const id = Number(req.params.id);

        const productoPedido = productos.find(productoActual => productoActual.id === id);

        if (productoPedido) {
            res.send(productoPedido);
        } else {
            res.send('No se encontró el producto ' + id);
        }
    },

    createProduct: (req, res) => {
        const name = req.query.name;
        const desc = req.query.desc;

        const newProduct = {
            id: productos.length + 1,
            name,
            description: desc
        }

        const nuevoArray = productsModel.agregarProducto(productos, newProduct);

        res.send(nuevoArray);
    }
}

module.exports = controller;