const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/mainRoutes');
const fs = require('fs');
const path = require ('path');
const morgan = require ('morgan');

const app = express();

app.use((req, res, next) => {
    fs.appendFileSync(path.join(__dirname, './logs.txt'), req._parsedUrl.path + '\n', 'utf-8');

    next();
});

app.use(morgan('tiny'));

app.use(mainRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('servidor escuchando en el puerto 3000');
})
