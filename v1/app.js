const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use((req, res) => {
    res.status(404);
    res.render('error');
});

app.listen(8020, () => {
    console.log('Express Server läuft auf http://localhost:8020');
});