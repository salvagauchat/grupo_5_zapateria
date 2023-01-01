const controller = {
    getIndex: (req, res) => {
        res.redirect('/users')
    },

    getUsers: (req, res) => {
        const users = [
            {
                id: '040533a5-305e-4ed5-ad88-97d716fc3161',
                email: 'ignacio@gmail.com',
                username: 'Nacho',
                password: '$2b$12$lBT3YJDNeDc8HgKFgmJhEeCkFSQ5hx3coiIPmLs0ih0U4zmh0WgDu'
            },
            {
                id: '2a9f1f92-f577-4c7a-bccc-292c44e179c4',
                email: 'rocio@gmail.com',
                username: 'Rocksy',
                password: '$2b$12$lBT3YJDNeDc8HgKFgmJhEeCkFSQ5hx3coiIPmLs0ih0U4zmh0WgDu'
            },
            {
                id: '45a3320d-e86d-4554-8340-c152d0f6ed17',
                email: 'pedro@gmail.com',
                username: 'Pedrito',
                password: '$2b$12$lBT3YJDNeDc8HgKFgmJhEeCkFSQ5hx3coiIPmLs0ih0U4zmh0WgDu'
            },
        ];

        res.render('users', { users });
    },

    getSingleUser: (req, res) => {
        const user = {
            id: '040533a5-305e-4ed5-ad88-97d716fc3161',
            email: 'ignacio@gmail.com',
            username: 'Nacho',
            password: '$2b$12$lBT3YJDNeDc8HgKFgmJhEeCkFSQ5hx3coiIPmLs0ih0U4zmh0WgDu'
        }

        res.render('userDetail', { user });
    },

    getCreateUser: (req, res) => {
        res.render('createUser');
    },

    postUser: (req, res) => {
        // se agrega el usuario y se redirecciona
        res.redirect('/users')
    },
    
    deleteUser: (req, res) => {
        // se elimina el usuario y se redirecciona
        res.redirect('/users')
    },
    

    getEditUser: (req, res) => {
        const user = {
            id: '040533a5-305e-4ed5-ad88-97d716fc3161',
            email: 'ignacio@gmail.com',
            username: 'Nacho',
            password: '$2b$12$lBT3YJDNeDc8HgKFgmJhEeCkFSQ5hx3coiIPmLs0ih0U4zmh0WgDu'
        }

        res.render('editUser', { user });
    },
    
    editUser: (req, res) => {
        // se edita el usuario y se redirecciona
        res.redirect('/users')
    },
}

module.exports = controller;