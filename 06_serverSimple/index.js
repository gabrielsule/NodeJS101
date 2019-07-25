const http = require('http');

const server = http.createServer(function() {
    console.log('petición realizada');
});

server.listen(3000);

console.log('server corriendo en port 3000');