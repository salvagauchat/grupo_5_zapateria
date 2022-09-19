const express = require('express');

const userController = require('../controllers/userControllers')

const router = express.Router();

const path = require('path');

const validations = require('../middlewares/validations.js');

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

router.get('/register', userController.register);
router.post('/register', validations.validationsRegister, userController.processRegister);

router.get('/login', userController.login);
router.post('/login', validations.validationsLogin ,userController.processLogin);


let upload = multer({storage: storage});


module.exports = router;