const sendAll = (req, res) => {
    res.send('Todos los productos');
}

const sendById = (req, res) => {
    res.send('Un producto en especifico');
}

const createProduct = (req, res) => {
    res.send('Creacion de producto');
}

//como no se puede exportar mas de una cosa a la vez, entonces tenemos que crear un 'OBJETO'

//const controller = {
//    sendAll,
//  sendById,
//  createProduct};   
//Una funcion de JS, es que cuando lo de la izquierda tenemos
//lo mismo que a la derecha. Lo de la derecha lo podemos borrar.
//Esto funciona unicamente en objetos.

// Ahora si podemos exportar

module.exports = {
    sendAll,
    sendById,
    createProduct
}