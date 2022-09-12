const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, "images_" + Date.now() + path.extname(file.originalname));
    }
})

let upload = multer({storage: storage});



router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/product-cart', mainController.productCart);
router.get('/product-detail', mainController.productDetail);

router.get('/product-admin', mainController.productAdmin);
router.post('/product-admin', upload.any(), mainController.productAdminProducto);

router.get('/product-edit/:id', mainController.productEdit);
router.put('/product-edit/:id',mainController.edit);


module.exports = router;