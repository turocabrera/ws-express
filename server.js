const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'arturo cabrera'
    });
});


app.get('/about', function(req, res) {


    res.render('about', {

        anio: new Date().getFullYear()
    });
});



app.get('/data', function(req, res) {


    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});