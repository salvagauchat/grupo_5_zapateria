const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {

    list: (req, res) => {
        db.User.findAll()
        .then(clientes=> {
            let userDetail = [];

            clientes.forEach(user=> {
                userDetail.push({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: `/api/users/${user.id}`
                })
            })

            let respuesta = {
                meta: {
                    status : 200,
                    count: clientes.length,
                    url: '/api/users'
                },
                users: userDetail,
                
            }
                res.json(respuesta);
            })
    },
    
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(cliente => {

                let user = [];

                user.push({
                    id: cliente.id,
                    name: cliente.name,
                    email: cliente.email,
                    img: `/images/users/${cliente.image}`
                })

                let respuesta = {
                    meta: {
                        status: 200,
                        url: `/api/users/${cliente.id}`
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
}















/* const db = require("../../database/models");

const controllerUser = {
    showUsers: (req, res) => {
        db.User.findAll({})
        .then(users => {
            return res.status(200).json({
                total: users.length,
                users:
                    users.map(user => { 
                    delete user.dataValues.password
                    delete user.dataValues.image
                    delete user.dataValues.cartId
                    delete user.dataValues.createdAt
                    delete user.dataValues.updatedAt
                    delete user.dataValues.deletedAt
                    user.dataValues.detailURl = `http://localhost:3003/api/users/${user.id}`
                    return user}),
                status: 200
            })
        })
    },
    detailUsers: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            delete user.dataValues.password
            delete user.dataValues.cartId
            delete user.dataValues.createdAt
            delete user.dataValues.updatedAt
            delete user.dataValues.deletedAt
            return res.status(200).json({
                data: user,
                imageURL: `http://localhost:3003/img/users/${user.image}`
            })
        })
    }
}

module.exports = controllerUser */