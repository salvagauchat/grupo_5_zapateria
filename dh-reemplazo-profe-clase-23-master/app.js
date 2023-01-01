const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', mainRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// routes
// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

app.listen(PORT, function() {
    console.log('listening on port http://localhost:' + PORT);
});