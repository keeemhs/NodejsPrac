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
    res.render('client');
});

// socket 이라고 되어있는 부분은 원하는 이름
io.on('connection', (socket) => {
    // client 에서 보낸 이름 그대로 작성하여 사용하다.
    // 무조건 첫번째 작성하여야 한다.
    // client 에서 보낸 arg 만큼 작성해 주어야 한다.
    socket.on('open_message', (arg, cb) => {
        console.log(arg);
        cb(arg);
    });

    // frontend에서 form_message 이벤트 받아오기
    socket.on('form_message', (arg) => {
        console.log(arg);
        // 새로운 이벤트 생성 (frontend에서 사용하기 위해서)
        socket.emit('backend_message', arg);
    });
});

// 서버
server.listen(PORT, () => {
    // 소켓에서 server. 으로 사용
    console.log(`http://localhost:${PORT}`);
});
