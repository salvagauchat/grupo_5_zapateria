const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('view', path.resolve(_dirname, './views'));

app.use(express.static(path.resolve(_dirname, '../public')));
app.listen(3001, ()=> console.log('servidor corriendo en el puerto 3001'));
