const express = require('express');
const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mysql = require('mysql');

// mysql 연결
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'keeemhs',
    password: 'gustmd0929!@',
    database: 'kdt9',
    port: 3306,
});
conn.connect( (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('connect')
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

// POST /signup 유저 생성
app.post('/signup', (req, res) => {
    const query = `INSERT INTO user (name, userid, pw) VALUES ('${req.body.name}', '${req.body.userid}', '${req.body.pw}')`;
    conn.query(query, (err, rows) => {
        console.log('rows', rows);
        res.send({ id: rows.insertId, name: req.body.name, userid: req.body.userid, pw: req.body.pw });
    });
});

// POST /signin 유저 비교
app.post('/signin', (req, res) => {

});

app.use*'*', (req, res) => {
    res.render('404');
}

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})