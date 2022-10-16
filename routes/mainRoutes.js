const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

const path = require('path');

const validations = require('../middlewares/validations.js');

const authMiddleware = require('../middlewares/authMiddleware');

const multer = require('multer');
const { throws } = require('assert');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/user');
    },
    filename: (req, file, cb) => {
        cb(null, "products_" + Date.now() + path.extname(file.originalname));
    }
})


let upload = multer({storage});

router.get('/', mainController.index);

router.get('/product-cart', mainController.productCart);

router.get('/product-detail/:id', mainController.productDetail);

router.get('/product-admin', mainController.productAdmin);
router.post('/product-admin', [upload.array('photos', 10), ...validations.validationProduct], mainController.productAdminProducto);

router.get('/product-edit/:id', authMiddleware, mainController.productEdit);
router.put('/product-edit/:id',mainController.edit);

router.get('/product-delete/:id',mainController.productDelete);
router.delete('/product-delete/:id', mainController.delete);


module.exports = router;