const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.index = (req, res) => {
    res.render('index');
};
exports.get_register = (req, res) => {
    res.render('register');
};
exports.get_login = (req, res) => {
    res.render('login');
};

//회원가입
exports.register = async (req, res) => {
    try {
        const { userid, pw, name } = req.body;
        const hashPw = bcryptPassword(pw);
        const result = await User.create({
            userid,
            name,
            pw: hashPw,
        });
        if (result) {
            res.json({ result: true });
        }
    } catch (error) {
        console.log(error);
    }
};

//로그인
exports.login = async (req, res) => {
    const { userid, pw } = req.body;
    const result = await User.findOne({
        where: { userid },
    });
    if (!result) {
        res.json({ result: false, message: '사용자가 존재하지 않습니다' });
    }
    const compare = comparePassword(pw, result.pw);
    if (compare) {
        res.json({ result: true });
    } else {
        res.json({ result: false, message: '비밀번호가 일치하지 않습니다' });
    }
};

//bcrypt 단방향
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};
