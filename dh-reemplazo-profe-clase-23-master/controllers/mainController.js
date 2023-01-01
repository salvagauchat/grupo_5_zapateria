const fs = require('fs');
const path = require('path');

const miPathDataBase = path.join(__dirname, '../data/contactos.json');
const dataBase = JSON.parse(fs.readFileSync(miPathDataBase, 'utf8'));

const mainController = {
    'index': (req, res) => {
        res.render('index.ejs');
    },
    contact: (req, res) => {
        res.render('contacto.ejs');
    },
    contactProcess: function (req, res) {
        let newContact = {
            id: 3,
            name: req.body.nombre
        }

        if (req.files) {
            newContact.images = req.files.map(file => file.filename)
        }

        dataBase.push(newContact);
        fs.writeFileSync(miPathDataBase, JSON.stringify(dataBase, null, ' '));
        res.redirect('/');
    }
}

module.exports = mainController;