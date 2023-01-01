const express = require('express');
const mainController = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainController.index);

router.get('/about', mainController.about);

router.get('/contact', mainController.contact);


module.exports = router;