const fs = require('fs')
const path = require('path');
const User = require('../models/User')
const bcryptjs = require('bcryptjs');

const pathDataBase = path.join(__dirname, '../data/user.json');


const users = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const { validationResult } = require('express-validator');

let userController = {
    register: (req, res) => {
        res.cookie('testing', 'hola mundo',{ maxAge: 1000 * 30})
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

    let userInDB = User.findByField('email', req.body.email);
    
    if(userInDB){
        return res.render('./users/register', {
            errors: {
                email: {
                   msg: 'Este email ya esta registrado'
                }
            },
            oldData: req.body
        })
    }
           
        let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10) 
                
            }
       
       let userCreated = User.create(userToCreate);
        return res.redirect('/login')
    },
        


    login: (req, res) => {
        console.log(req.cookies.testing)
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
        let userToLogin = User.findByField('email', req.body.email)
        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                req.session.userLogged = userToLogin;

                if(req.body.renember_user) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2 })
                }

                console.log('estas en profile')
                console.log(req.session); 
                return res.redirect('/')
        }
    }
        
        return  res.render('./users/login', {
           errors: { 
            email: {
                msg: 'datos no valido'
            }
           }
        })
      
    },
}


module.exports = userController