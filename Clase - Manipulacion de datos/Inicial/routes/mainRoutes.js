const express = require('express');
const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainControllers.getIndex); // redirecciona a users
router.get('/users', mainControllers.getUsers); // muestra todos los usuarios
router.get('/users/:id/detail', mainControllers.getSingleUser); // muestra datos de un usuario
router.get('/users/create', mainControllers.getCreateUser); // muestra form de creación de usuario
router.post('/users/create', mainControllers.postUser); // recibe datos de usuario y lo registra
router.get('/users/:id/edit', mainControllers.getEditUser) // muestra form de edición de usuario
router.put('/users/:id/edit', mainControllers.editUser) // muestra form de edición de usuario
router.delete('/users/:id/delete', mainControllers.deleteUser) // muestra form de edición de usuario



module.exports = router;