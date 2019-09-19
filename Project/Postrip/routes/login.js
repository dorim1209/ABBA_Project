var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login) {
/*     res.render('login', {
      loginState: req.session.login,
      name: req.session.name,
      email: req.session.email,
      id: req.session.lid,
      pw: req.session.pw,
      birth: req.session.birth,
      image: req.session.image
    }); */
    res.redirect("/mypage2");
  } else {
    res.render('login');
  }
});

module.exports = router;
