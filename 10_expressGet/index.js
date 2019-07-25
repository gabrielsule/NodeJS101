const express = require('express');
const app = express();

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

app.listen(3000, () => console.log('server corriendo en port 3000'));
