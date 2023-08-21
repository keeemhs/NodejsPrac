const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // 파일 이름을 변경하지 않고 그대로 유지하도록 설정
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// 정적 파일 서빙
app.use('/uploads', express.static('uploads'));

// 홈 페이지 렌더링
app.get('/', (req, res) => {
    res.render('activity');
});

// 파일 업로드 처리
app.post('/upload', upload.array('files', 10), (req, res) => {
    // 업로드된 파일 정보는 req.files 배열에 저장됩니다.
    // 여기에서 파일을 처리하거나 저장하는 작업을 수행할 수 있습니다.

    // 예시: 업로드된 파일 목록을 클라이언트로 응답
    res.json({ message: '파일 업로드 완료', files: req.files });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
