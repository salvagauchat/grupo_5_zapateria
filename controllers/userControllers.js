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
        const generateId = () => {
            const lastUser = users[users.length - 1];
            const lastId = lastUser.id;
            return lastId + 1;
        }

        let usuarioCreado = {
            id: generateId(),
            name: req.body.name,
            nameUser: req.body.nameUser,
            domic: req.body.domic,
            category: req.body.category,
            email: req.body.email,
            password: req.body.password
        }
        if (req.files) {
            usuarioCreado.image = req.files.map(file => file.filename);
        }
        users.push(usuarioCreado);

        fs.writeFileSync(pathDataBase, JSON.stringify(users, null, ' '));

        res.redirect('./');
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