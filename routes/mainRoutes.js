const express = require('express');

const mainController = require('../controllers/mainControllers')

const router = express.Router();

const path = require('path');

const {body} = require('express-validator');

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

validations = [
    body('name')
    .notEmpty().withMessage('Falta escribir el nombre').bail(),
    body('marca').notEmpty().withMessage('Falta escribir la marca'),
    body('discount').notEmpty().withMessage('Falta colocar el descuento'),
    body('price').notEmpty().withMessage('Falta colocar el precio'),
    body('image').custom((value, {req})=>{

        let acceptedExtensions = ['jpg'];
        
        let file = req.file;

        if(!file){
            throw new Error('Faltan subir las imágenes');
        }else{
            let fileExtensions = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtensions)){
            throw new Error(`Solo se permite el formato de imagen ${acceptedExtensions}`);
        }
        }
    })
];
router.get('/product-admin', mainController.productAdmin);
router.post('/product-admin', upload.any(), validations, mainController.productAdminProducto);



router.get('/product-edit/:id', mainController.productEdit);
router.put('/product-edit/:id',mainController.edit);


module.exports = router;