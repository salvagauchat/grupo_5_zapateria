const express = require('express');

const userController = require('../controllers/userControllers')

const router = express.Router();

const path = require('path');

const validations = require('../middlewares/validations.js');
const redirecion = require('../middlewares/redirecion.js');

const multer = require('multer');


const { throws } = require('assert');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/user');
    },
    filename: (req, file, cb) => {
        cb(null, "avatar_" + Date.now() + path.extname(file.originalname));
    }
})

let uploadFile = multer({storage: storage});

router.get('/register', userController.register);
router.post('/register', uploadFile.single('avatar'), validations.validationsRegister, userController.processRegister);

router.get('/login', redirecion ,userController.login);
router.post('/login', validations.validationsLogin ,userController.processLogin);

router.get('/perfil/:id',userController.perfil);
router.put('/perfil/:id',userController.editPerfil);
router.delete('/perfil/:id', userController.deletePerfil);




module.exports = router;