/**
 * Created by finch on 8/10/17.
 */
/**
 * Created by finch on 7/22/17.
 */
var express = require('express');
var router = express.Router();
var Account = require('../models/User');

router.use(function (req, res, next) {
  console.log('Date', Date.now());
  next();
});

router.post('/user/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);

  Account.findOne({username, password}, (err, users) => {
	console.log(err, users);
	if (err) return res.json(err);

	if (users) {
	  return res.json({
		status: 1,
		message: 'login successful'
	  })
	} else {
	  return res.json({
		status: 0,
		message: 'login fail'
	  })
	}
  })
});

router.post('/user/update', function (req, res) {
  Account.update({username: req.body.username}, {password: req.body.password}, {multi: false}, (err, users) => {
	console.log(err, users);
	if (err) return res.json(err);

	if (users) {
	  return res.json({
		status: 1,
		message: 'update successful'
	  })
	} else {
	  return res.json({
		status: 0,
		message: 'update fail'
	  })
	}
  })
});

router.post('/user/signup', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  console.log(username);
  console.log(password);
  console.log(email);

  var User = new Account({username, password, email});

  User.save((err) => {
    if(err) return res.json(err);

	return res.json({
	  status: 1,
	  message: 'save successful'
	})

  });
});

router.get('/about', function (req, res) {
  res.send("About me");
});


module.exports = router;
