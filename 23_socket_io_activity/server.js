const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server); // 통상적으로 io 라고 선언한다.

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client'); // You need to render 'client.ejs' file here.
});

// socket 이라고 되어있는 부분은 원하는 이름
io.on('connection', (socket) => {
    socket.on('print_hello', (data) => {
        console.log(`client: ${data.msg}`);
        socket.emit('back_hello', { msg: 'hello: 안녕하세요' });
    });

    socket.on('print_study', (data) => {
        console.log(`client: ${data.msg}`);
        socket.emit('back_study', { msg: 'study: 안녕하세요' });
    });

    socket.on('print_bye', (data) => {
        console.log(`client: ${data.msg}`);
        socket.emit('back_bye', { msg: 'bye: 안녕하세요' });
    });
});

// 서버
server.listen(PORT, () => {
    // 소켓에서 server. 으로 사용
    console.log(`http://localhost:${PORT}`);
});
