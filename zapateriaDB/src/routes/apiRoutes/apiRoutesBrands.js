const express = require ("express");
const router = express.Router();

const controllerBrands = require ("../../controllers/controllersAPI/brandControllerAPI");


//Rutas de APIs de productos
router.get("/", controllerBrands.show);
/* router.get("/products/:id", controllerProduct.detailProducts); */


module.exports = router;