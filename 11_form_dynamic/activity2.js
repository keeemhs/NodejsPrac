const express = require('express');
const app = express();
const PORT = 9000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
    res.render('activity2');
});

app.post('/axios', (req, res) => {
    console.log('back', req.body);
    if(req.body.id == 'id' && req.body.pw == 1234) {
        res.send({result: "success"})
    }
    else {
        res.send({result: "fail"})
    }
});

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
