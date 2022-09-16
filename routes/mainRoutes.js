const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

const path = require('path');

const validations = require('../middlewares/validations.js');

const multer = require('multer');
const { throws } = require('assert');

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
router.post('/product-admin', [upload.any(), ...validations.validationProduct], mainController.productAdminProducto);



router.get('/product-edit/:id/actualizar', mainController.productEdit);
router.put('/product-edit/:id/',mainController.edit);

router.get('/product-delete/:id/eliminar',mainController.productDelete);
router.delete('/product-delete/:id', mainController.delete);


module.exports = router;