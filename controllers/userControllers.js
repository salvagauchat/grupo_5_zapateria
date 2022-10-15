const fs = require('fs')
const path = require('path');
const User = require('../models/User')
const bcryptjs = require('bcryptjs');

const pathDataBase = path.join(__dirname, '../data/user.json');


const users = JSON.parse(fs.readFileSync(pathDataBase), { encoding: 'utf-8' });

const { validationResult } = require('express-validator');
const e = require('method-override');

let userController = {
    register: (req, res) => {
        res.cookie('testing', 'hola mundo',{ maxAge: 100000000 * 900})
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
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename
                
            }
       
       let userCreated = User.create(userToCreate);
        return res.redirect('/login')
    },
        


    login: (req, res) => {
        console.log(req.cookies.testing)
        res.render('./users/login')
    },
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
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
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                
                if(req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2 })
                }

                /* console.log('estas en profile')
                console.log(req.session);  */
                console.log(userToLogin);
                

                //El ID sale como "undefined", hay que cambiarlo
                let id = userToLogin.id - 1
                return res.redirect('/perfil/' + id)
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
    perfil: (req, res)=>{
        const id = req.params.id;
        let editUser = users[id];

        res.render('./users/perfilUser', {editUser:editUser});
    },
    editPerfil:(req, res)=>{

        const id = req.params.id;
        let userId = Number(id);

        let usuarioEditado = {
            id: userId,
            name: req.body.name,
            nameUser: req.body.nameUser,
            email: req.body.email,
            domic: req.body.domic,
            password: req.body.password, 
        }

        users.forEach(usuarioActual => {
            if (usuarioActual.id == usuarioEditado.id) {
                usuarioActual.name = usuarioEditado.name,
                usuarioActual.nameUser = usuarioEditado.nameUser,
                usuarioActual.domic = usuarioEditado.domic,
                usuarioActual.email = usuarioEditado.email,
                usuarioActual.password = usuarioEditado.password
            }
        });
        
        console.log(usuarioEditado);

        fs.writeFileSync(pathDataBase, JSON.stringify(users, null, " "));

        res.redirect("/");
    },
    deletePerfil:(req, res)=>{
        const id = req.params.id;
        let userId = Number(id);
        
        let usersMenosEliminado = users.filter(usuarioActual => usuarioActual.id != userId);

        console.log(usersMenosEliminado);
        fs.writeFileSync(pathDataBase, JSON.stringify(usersMenosEliminado, null, " "));

        res.redirect("/");
    }
    
}


module.exports = userController