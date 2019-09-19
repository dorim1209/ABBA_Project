var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("name:"+req.session.name);
  console.log("email:"+req.session.email);
  console.log("id:"+req.session.lid);
  console.log("pw:"+req.session.pw);
  console.log("birth:"+req.session.birth);
  console.log("image:"+req.session.image);

  if(req.session.login) {
    res.render('mypage_edit', {
      loginState: req.session.login,
      name:req.session.name,
      email:req.session.email,
      id: req.session.lid,
      pw: req.session.pw,
      birth:req.session.birth,
      image:req.session.image
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;