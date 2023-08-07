const express = require('express');
const router = express.Router();

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요!'
    },
    {
        id: 2,
        userId: 'happy',
        date: '2023-08-02',
        comment: '반갑습니다!'
    },
    {
        id: 3,
        userId: 'lucky',
        date: '2023-08-03',
        comment: '행복하세요!'
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-04',
        comment: '좋은저녁되세요!'
    },
]

router.get('/', (req, res) => {
    res.render('index');
});
//GET /comments
router.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments });
});
//GET /comment/:id
router.get('/comment/:id', (req, res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId - 1]);
    res.render('comment', { commentInfo: comments[commentId - 1] });
});

module.exports = router;
