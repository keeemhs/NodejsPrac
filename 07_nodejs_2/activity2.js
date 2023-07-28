const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 정적인 파일 불러오기
app.use('/public', express.static('./public'))


app.get('/activity21',(req,res)=>{
    res.render('activity21')
})
app.get('/activity22',(req,res)=>{
    res.render('activity22')
})
app.get('/activity23',(req,res)=>{
    res.render('activity23')
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