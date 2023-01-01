const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(morgan('dev'));
// helmet

app.use(mainRoutes);

app.listen(3000, () => {
    console.log('🚀Servidor corriendo en puerto 3000 | http://localhost:3000');
});