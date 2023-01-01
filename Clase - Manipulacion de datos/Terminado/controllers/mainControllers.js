const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { captureRejectionSymbol } = require('events');

const controller = {
    getIndex: (req, res) => {
        res.redirect('/users')
    },

    getUsers: (req, res) => {
        db.User.findAll({
            raw: true
        })
            .then(users => res.render('users', { users }))
    },

    getSingleUser: (req, res) => {
        const userId = req.params.id;

        db.User.findByPk(userId)
            .then(user => res.render('userDetail', { user }));
    },

    getCreateUser: (req, res) => {
        res.render('createUser');
    },

    postUser: (req, res) => {
        const hashedPassword = bcrypt.hashSync(req.body.password, 12);

        const user = {
            email: req.body.email,
            password: hashedPassword,
            username: req.body.username,
        }

        db.User.create(user)
            .then(newUser => res.redirect(`/users/${newUser.dataValues.id}/detail`));
    },

    deleteUser: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(user => res.redirect('/users'))
            .catch(error => console.log(error));
    },


    getEditUser: async (req, res) => {
        const id = req.params.id;
        /* db.User.findByPk(id)
            .then(user => {
                res.render('editUser', { user });
            })
            .catch(error => console.log(error)); */

        try {
            const user = await db.User.findByPk(id);
            await res.render('editUser', { user });
        } catch (error) {
            console.log(error)
        }
    },

    editUser: (req, res) => {
        const user = {
            username: req.body.username,
            email: req.body.email
        }

        db.User.update(user, {
            where: {
                id: req.params.id
            }
        })
            .then(user => res.redirect(`/users/${req.params.id}/detail`));
    },
}

module.exports = controller;