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

app.get('/chat', (req, res) => {
    res.render('chat');
});

// socket 이라고 되어있는 부분은 원하는 이름
io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {
        // 채팅방을 생성하는 방법은 join(방 아이디) 사용. 방이 존재하면 그 방으로 접속
        socket.join(res);
        socket.room = res;
        console.log('조인 후', socket.rooms);
        // broadcast는 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', `${socket.id}님이 입장하였습니다.`);
        // console.log(socket);
        const roomInfo = io.sockets.adapter.rooms.get(res)?.size;
        console.log(roomInfo);
    });
    socket.on('message', (res) => {
        // io.to(특정방아이디).emit(이벤트) 특정방의 전체 사용자에게 메세지 전달
        io.to(socket.room).emit('chat', { message: res, sender: socket.id }); // 발신자 정보와 함께 메시지 전달
    });
    socket.on('leave', () => {
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room)?.size;
        console.log(roomInfo);
    });
});

// 서버
server.listen(PORT, () => {
    // 소켓에서 server. 으로 사용
    console.log(`http://localhost:${PORT}`);
});
