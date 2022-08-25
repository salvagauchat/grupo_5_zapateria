const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/product-cart', mainController.productCart)
router.get('/product-detail', mainController.productDetail)

module.exports = router