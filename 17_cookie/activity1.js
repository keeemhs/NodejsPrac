const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// 익스프레스 객체에 미들웨이 등록
app.use(cookieParser('1234'));

app.get("/", (req, res) => {
    res.render("activity1");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});