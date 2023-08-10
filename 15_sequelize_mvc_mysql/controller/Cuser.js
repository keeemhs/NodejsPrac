// const User = require('../model/User');
const { User } = require('../models');

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};


exports.post_signup = (req, res) => {
    //model
    // User.post_signup(req.body, () => {
    //     res.send({ result: true });
    // });
    User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    }).then(result => {
        res.send({ result: true });
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {
    //model
    // User.post_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.send({ result: true, data: result[0] });
    //     } else {
    //         res.send({ result: false, data: null });
    //     }
    // });
    const { userid, pw } = req.body;
    User.findOne({
        where: { userid, pw },
    }).then( (data) => {
        console.log('result', data);
        res.send({ result: true, data });
    });
};

exports.post_profile = (req, res) => {
    // User.post_profile(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.render('profile', { data: result[0] });
    //     }
    // });
    const { userid } = req.body;
    User.findOne({
        where: { userid },
    }).then( (data) => {
        console.log('result', data);
        res.send('profile', { data });
    });
};

exports.edit_profile = (req, res) => {
    // User.edit_profile(req.body, () => {
    //     res.send({ result: true });
    // });
    const { userid, pw, name, id } = req.body;
    User.update({userid, pw, name}, {where: {id}}).then( (result) => {
        res.send({ result: true });
    });
};

exports.delete_profile = (req, res) => {
    // User.delete_profile(req.body.id, () => {
    //     res.send({ result: true });
    // });
    const { id } = req.body;
    User.destroy({where: { id }}).then(result => {
        res.send({ result: true });
    });
};