// Imports
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const app = express();
const products = require('./routes/products');
const home = require('./routes/home');

// Views
app.set('view engine', 'pug');
app.set('views', './views');

// Requerimets
app.use(express.json());                        //req.body
app.use(express.urlencoded({ extended: true})); //key:value
app.use(express.static('public'));              //carpeta publica
app.use(helmet());
// Routes
app.use('/', home);
app.use('/api/product', products);


// Environment only development
console.log('Aplicación: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
if (app.get('env') === 'develpment') {
    app.use(morgan('tiny'));
}

app.listen(3000, () => console.log('server corriendo en port 3000'));
