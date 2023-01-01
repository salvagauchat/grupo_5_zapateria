const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const mainController = require('../controllers/mainController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        //1231212312.png
        cb(null, "images_" + Date.now() + path.extname(file.originalname));
    }
})

let upload = multer({storage: storage});

router.get('/', mainController.index);

router.get('/contacto', mainController.contact);
router.post('/contacto', upload.any(), mainController.contactProcess);

module.exports = router;