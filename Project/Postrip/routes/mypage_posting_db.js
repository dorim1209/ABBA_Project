const express = require('express');

/* models 모듈에서 MyPage 모델을 호출하여 MyPage 로 선언 */
var MyPage = require('../models').MyPage;

const router = express.Router();

/* post 방식으로 호출된 router를 처리 */
router.get('/', function (req, res, next) {
  if(req.session.login) {
  if (req.session.lid) {
    /* MyPage 테이블의 데이터를 가져오는 SQL문 */
    MyPage.findAll({

    attributes: ['db_image'],

    /* 조건과 값이 일치하는 경우 */
    where: {
      db_id: req.session.lid
    }
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result : " + JSON.stringify(result));

      let DB1 = JSON.stringify(result);
      console.log("JSON.parse(DB1) : " + JSON.parse(DB1));
      let DB2 = JSON.parse(DB1);
      let DB = JSON.stringify(DB2);

      req.session.DB = DB2;
      req.session.DB_length = DB2.length;

      console.log("req.session.DB : " + req.session.DB);

      console.log("DB : " + DB);
      console.log("DB2.lenght : " + DB2.lenght);
      console.log("DB2[0] : " + DB2[0]);
      console.log("DB2[0] : " + JSON.stringify(DB2[0]));
      console.log("DB2[1] : " + DB2[1]);

      /* result 값을 json 형태로 리턴 */
      /* res.json(JSON.stringify(result)); */
      /* res.redirect('/'); */

      res.render('mypage2', {
        loginState: req.session.login,
        name: req.session.name,
        image: req.session.image,
        DB: req.session.DB,
        length: req.session.DB_length
      });
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
      next(err);
    });
  }
} else {
  res.redirect('/login');
}

});

module.exports = router;