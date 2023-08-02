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
    res.render('activity1');
});

app.get('/axios', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});