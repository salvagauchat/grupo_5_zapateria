const fs = require('fs')
const path = require('path');

const pathDataBase = path.join(__dirname, '../data/user.json');

const users = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const { validationResult } = require('express-validator');

let userController = {
    register: (req, res) => {
        res.render('./users/register')
    },
    processRegister: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    processLogin: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/login', {
                errors: resultValidation.mapped(), //convierte al array en un objeto.
                oldData: req.body
            })
        }
        
        return res.send('Registro en construcción')
    },
}


module.exports = userController