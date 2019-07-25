const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('NodeJS Server');
    res.write(req.url);

    console.log('petición realizada');
});

server.listen(3000);

console.log('server corriendo en port 3000');