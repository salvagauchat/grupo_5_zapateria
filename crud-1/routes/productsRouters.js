const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.get('/', productController.index);
router.get('/products', productController.list);
router.put('/product'), (req, res) => {... };
router.get('/:id', productController.detail)
router.delete('/:id'

module.export = router;


