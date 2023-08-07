const express = require('express');
const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require('./routes/index');
app.use('/', router);
// example)
// const userRouter = require('./routes/user');
// app.use('/user', userRouter);

// *** 맨 마지막 선언 ***
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});