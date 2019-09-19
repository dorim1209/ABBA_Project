var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("id찾은건지비밀번호찾은건지:"+req.session.id_login);
  console.log("id:"+req.session.find_id);
  console.log("pw :"+req.session.pw_login);
  console.log("pw find_pw_pw :"+req.session.find_pw_pw);
  
  res.render('find_idpw', {
    id: req.session.find_id,
    id_login: req.session.id_login,
    pw: req.session.find_pw_pw,
    pw_login: req.session.pw_login,
  });
});

module.exports = router;
