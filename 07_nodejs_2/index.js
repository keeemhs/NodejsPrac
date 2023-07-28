const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 정적인 파일 불러오기
app.use('/public', express.static('./public'))

app.get('/',(req,res) => {
    // send() 클라이언트에 응답 데이터를 보낼 떄
    // res.send("HEllo Express")
    res.send({ result: true, code: 1000, message: '회원가입성공', data: {name: "keeemhs"} })
})
app.get('/kdt9',(req,res)=>{
    // render() 뷰 엔진 렌더링
    res.render('test', { name: 'keeemhs' })
    // res.send("HEllo kdt9");
})
app.get('/activity1',(req,res)=>{
    res.render('230707_activity3')
})
app.get('/fruit',(req,res)=>{
    res.render('230713_activity1')
})
app.get('/multitable',(req,res)=>{
    res.render('activity1')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})