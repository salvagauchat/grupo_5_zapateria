const express = require ("express");
const router = express.Router();

const controllerUser = require ("../../controllers/controllersAPI/userControllerAPI");


//Rutas de APIs de Usuario

router.get("/", controllerUser.list);
router.get("/:id", controllerUser.detail);



module.exports = router;