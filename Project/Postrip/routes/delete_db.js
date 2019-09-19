const express = require('express');
const router = express.Router();

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;

router.get('/', function (req, res) {
  console.log("req.session.email123123332131232131231231212122 : " + req.session.email);

  /* User 테이블의 데이터를 생성하는 SQL문 */
  User.destroy ({
    where: { db_email: req.session.email },
    force: true
  })
    /* 조회 성공시 */
    .then((result) => {
      console.log("result : " + result);
      /* result 값을 json 형태로 리턴 */
      req.status(201).json(result);
    })
    /* 조회 실패시 */
    .catch((err) => {
      console.error("err : " + err);
    });

  /* 세션 값을 삭제 */
  /* req.session.destroy(function (err) { */
  /* index.ejs로 요청의 경로를 재지정 */
  /* res.redirect('/');
}); */

        /* 세션 값을 삭제 */
        req.session.destroy(function(err) {
            /* index.ejs로 요청의 경로를 재지정 */
            res.json(JSON.stringify("탈퇴되었습니다."));
        });
});

module.exports = router;