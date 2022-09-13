const {body} = require('express-validator');

const validations = {
    validationProduct: [
        body('name')
        .notEmpty().withMessage('Falta escribir el nombre').bail(),
    
        body('marca').notEmpty().withMessage('Falta escribir la marca'),
    
        body('discount').notEmpty().withMessage('Falta colocar el descuento'),
    
        body('price').notEmpty().withMessage('Falta colocar el precio'),
    
        body('image').custom((value, {req})=>{
    
            /* let acceptedExtensions = ['jpg, jpeg']; */
            
            let file = req.file;
    
            if(!file){
                throw new Error('Faltan subir las imágenes');
            }/* else{
                let fileExtensions = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtensions)){
                throw new Error(`Solo se permite el formato de imagen ${acceptedExtensions}`);
            }
            } */
        })
    ]
}

module.exports = validations;