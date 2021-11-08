var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

var allUsers = []

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log("USER => ", req.user)
  allUsers.push(req.user)
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page',
    userProfiles: allUsers
  });
});

module.exports = router;
