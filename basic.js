const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Iam connected');
});

//testinng server
server.listen(8000);