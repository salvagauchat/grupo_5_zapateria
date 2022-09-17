const { body } = require('express-validator');

const validations = {
    validationProduct: [
        body('name')
            .notEmpty().withMessage('Falta escribir el nombre'),

        body('marca').notEmpty().withMessage('Falta escribir la marca'),

        body('discount').notEmpty().withMessage('Falta colocar el descuento'),

        body('price').notEmpty().withMessage('Falta colocar el precio'),

        /* body('image').custom((value, {req})=>{
    
             let acceptedExtensions = ['jpg, jpeg'];
            
            let file = req.file;
    
            if(!file){
                throw new Error('Faltan subir las imágenes');
            }else{
                let fileExtensions = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtensions)){
                throw new Error(`Solo se permite el formato de imagen ${acceptedExtensions}`);
            }
            } 
        }) */
    ],

    validationsLogin: [
        body('email').isEmail().withMessage('Completar con un email valido'),
        body('password').isLength({min: 8}).withMessage('Debes escribir tu contraseña'),
    ],

    validationsRegister : [
        body('name').notEmpty().withMessage('Escribir tu nombre y apellido'),
        body('nameUser').notEmpty().withMessage('Escribir un nombre de usuario'),
        body('fechaNaci').notEmpty().withMessage('Escribir tu fecha de nacimiento'),
        body('domic').notEmpty().withMessage('Escribir tu direccion'),
        body('email').isEmail().withMessage('Completar con un email valido'),
        body('password').isLength({min: 8}).withMessage('Debe ser mayor a 7 caracteres'),
        body('confpassword').notEmpty().withMessage('Confirmar contraseña'),
    ]
}

module.exports = validations;