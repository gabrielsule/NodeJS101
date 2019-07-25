const express = require('express');
const app = express();
app.use(express.json());

const products = [
    { id: 1, name: 'prod1' },
    { id: 2, name: 'prod2' },
    { id: 3, name: 'prod3' }
];

app.get('/api/product', (req, res) => {
    res.send(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        res.status(404).send('Producto no encontrado');
    }
    else {
        res.send(product);
    }
});

app.post('/api/product', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send('El campo nombre es requerido o es menor a 3 caracteres');
        return;
    }

    const product = {
        id: products.length + 1,
        name: req.body.name
    }

    products.push(product);

    res.send(product);
});

app.listen(3000, () => console.log('server corriendo en port 3000'));
