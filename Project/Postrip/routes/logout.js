var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  console.log("req.session.login123213131 : " + req.session.login);
  
      /* 세션에 login_login_id 값이 존재할 경우 */
      if (req.session.login) {

        /* 세션 값을 삭제 */
        req.session.destroy(function(err) {
            /* index.ejs로 요청의 경로를 재지정 */
            res.redirect('/');
        });
    }
});

module.exports = router;
