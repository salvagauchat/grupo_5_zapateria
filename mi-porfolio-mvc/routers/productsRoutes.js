const express = require('express');
const productController = require('../controllers/productsControllers');

// creamos el router
const router = express.Router();

router.get('/', productController.sendAll);

router.get('/producto-1', productController.sendById);

router.get('/create', productController.createProduct);

module.exports = router;
