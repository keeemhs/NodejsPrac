// const mod = require("./module");
// console.log(mod);

const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer(function(req, res) {
    // res.writeHead(200)
    // res.write("<h1>Hello World</h1>")
    // res.end("<p>end</p>")

    // 파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

server.listen(8000, function() {
    console.log('8000번 포트로 실행');
})
