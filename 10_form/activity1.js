const express = require('express');
const app = express();
const PORT = 9000;

// body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('activity1', { title: '실습1' });
});
app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('activityresult1', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('activityresult1', {
        title: 'POST요청 폼 결과 확인하기',
        userInfo: req.body,
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})