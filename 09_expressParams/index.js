const express = require('express');
const app = express();

app.get('/api/product/:id/:name', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => console.log('server corriendo en port 3000'));