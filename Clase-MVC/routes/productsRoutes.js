const express = require('express');
const productController = require('../controllers/productsControllers');

// Creamos el router
const router = express.Router();

router.get('/', productController.sendAll);

// /products/create?name=cafetera&desc=cafetera-express
router.get('/create', productController.createProduct);

// /products/5
router.get('/:id', productController.sendById);

module.exports = router;