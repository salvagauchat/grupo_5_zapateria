const model = {
    agregarProducto: (productos, nuevoProducto) => {
        productos.push(nuevoProducto);
    
        return productos;
    }
}

module.exports = model