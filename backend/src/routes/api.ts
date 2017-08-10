/**
 * Created by finch on 8/10/17.
 */
/**
 * Created by finch on 7/22/17.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://wukong:zy1992928@ds113713.mlab.com:13713/book_demo');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = mongoose.model('user', userSchema);

router.use(function (req: any, res: any, next: any) {
    console.log('Date', Date.now());
    next();
});

router.post('/login', function (req: any, res: any) {
    const username = req.body.username;
    console.log(username);

    User.findOne({ username: username }, (err: any, datas: any) => {
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

router.post('/signup', function (req: any, res: any) {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);

    var newUser = new User({ username: req.body.username, password: req.body.password, email: req.body.email });

    newUser.save((err: any, newUser: any) => {
        if (err) return res.json(err);
        res.json(newUser);
    })
});

router.get('/about', function (req: any, res: any) {
    res.send("About me");
});


module.exports = router;
