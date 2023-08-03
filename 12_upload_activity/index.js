const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 9000;

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// 정적파일
app.use('/uploads', express.static(__dirname + '/uploads'));
// multer 세팅
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            console.log('filename: ', req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.userId + Date.now() + ext);
        },
    }),
    limits: { fileSize: 10 * 1024 * 1024 },
})

// router
app.get('/', (req, res) => {
    res.render('index');
})
app.post('/result', uploadDetail.single('profile'), (req, res) => {
    res.render('result', {
        userInfo: req.body,
        profile: req.file.path,
    });
})

// server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})