const path = require('path');

const controller = {
    index: (req, res) => res.sendFile(path.join(__dirname, '../views/home.html')),
    about: (req, res) => res.sendFile(path.join(__dirname, '../views/about.html')),
    contact: (req, res) => res.send('Estas en la ruta /contact')
}   

module.exports = controller