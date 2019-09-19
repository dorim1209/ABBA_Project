var express = require('express');
var router = express.Router();

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("qqweqeqweqweqweqweqweqweqweqweqweqweq : " + req.session.DB);
  
  if(req.session.login) {
    res.render('mypage2', {
      loginState: req.session.login,
      name: req.session.name,
      image: req.session.image,
      DB: req.session.DB
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
