exports.result = (req, res) => {
    console.log('back', req.body);
    if(req.body.id == 'id' && req.body.pw == 1234) {
        res.send({result: "success"})
    }
    else {
        res.send({result: "fail"})
    }
};

exports.main = (req, res) => {
    res.render('activity1');
};