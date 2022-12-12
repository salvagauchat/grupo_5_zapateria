const express = require ("express");
const router = express.Router();

const controllerProduct = require ("../../controllers/controllersAPI/productControllerAPI");


//Rutas de APIs de productos
router.get("/products", controllerProduct.showProducts);
router.get("/products/:id", controllerProduct.detailProducts);


module.exports = router;