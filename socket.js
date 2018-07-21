//socket server

var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(8090);

function handler (req, res) {
    res.writeHead(200);
    res.end('socket io server');
}

io.on('connection', function (socket) {
    console.log('client connected');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});