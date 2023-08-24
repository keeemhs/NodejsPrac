// const model = require('../model/Model');
// models/index에서 index는 생략
const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltNumber = 10;

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    // findOne: 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    // where는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
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
const post_signin = async (req, res) => {
    const { userid, pw } = req.body;
    const result = await User.findOne({
        where: { userid },
    });
    if (!result) {
        res.json({ result: false, message: '사용자가 존재하지 않습니다' });
    }
    console.log(result);
    const compare = comparePassword(pw, result.pw);
    if (compare) {
        res.json({ result: true, data: result.dataValues });
    } else {
        res.json({ result: false, message: '비밀번호가 일치하지 않습니다' });
    }
    // 실습과제 - 로그인
    // step1 아이디를 찾아서 사용자 존재 유/무 체크
    // step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    // update(수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const { userid, name, pw } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

/////////////////////////////////////////
//DELETE
//회원탈퇴 destroy()
const destroy = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: { id },
    }).then(() => {
        res.json({ result: true });
    });
};

// 암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    destroy,
};
