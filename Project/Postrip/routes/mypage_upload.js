var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login) {
    res.render('mypage_upload', {
      loginState: req.session.login,
      name: req.session.name,
      image: req.session.image
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
