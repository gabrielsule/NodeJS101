const express = require('express');
const router = express.Router();
const Joi = require('joi');

const products = [
    { id: 1, name: 'prod1' },
    { id: 2, name: 'prod2' },
    { id: 3, name: 'prod3' }
];

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        res.status(404).send('Producto no encontrado');
    }
    else {
        res.send(product);
    }
});

router.post('/', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        res.status(404).send(result.error.message);
        return;
    }

    const product = {
        id: products.length + 1,
        name: req.body.name
    }

    products.push(product);

    res.send(product);
});

module.exports = router;