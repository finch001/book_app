/**
 * Created by finch on 8/10/17.
 */
/**
 * Created by finch on 7/22/17.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://wukong:zy1992928@ds113713.mlab.com:13713/book_demo');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = mongoose.model('user', userSchema);

app.get('/awesome', function (req, res) {

    if (req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");
    }
    req.session.lastPage = '/awesome'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
    res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});

app.get('/radical', function (req, res) {
    if (req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");
    }
    req.session.lastPage = '/radical';
    res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});

app.get('/tubular', function (req, res) {
    if (req.session.lastPage) {
        console.log("Last page was: " + req.session.lastPage + ".");
    }

    req.session.lastPage = '/tubular';
    res.send('Are you a suffer? And the session expired time is: ' + req.session.cookie.maxAge);
});

router.use(function (req, res, next) {
    console.log('Date', Date.now());
    next();
});

router.post('/login', function (req, res) {
    const username = req.body.username;
    console.log(username);

    User.findOne({
        username: username
    }, (err, datas) => {
        if (err) return res.json(err);
        console.log(datas);
        if (datas) {
            res.json({
                status: 1,
                payload: {
                    message: datas,
                    err: ""
                }
            })
        } else {
            res.json({
                status: 0,
                payload: {
                    message: datas,
                    err: ""
                }
            })
        }
    });
});

router.post('/signup', function (req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);

    var newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    newUser.save((err, newUser) => {
        if (err) return res.json(err);
        res.json(newUser);
    })
});

router.get('/about', function (req, res) {
    res.send("About me");
});


module.exports = router;