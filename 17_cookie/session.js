const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

// 세션 옵션 객체
// httpOnly: 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
// secure: 값을 true로 하면 https에서만 세션을 주고받음
// 
app.use(session());