const express = require ("express");
const router = express.Router();

const controllerProduct = require ("../../controllers/controllersAPI/productControllerAPI");


//Rutas de APIs de productos
router.get("/", controllerProduct.show);
/* router.get("/products/:id", controllerProduct.detailProducts); */


module.exports = router;