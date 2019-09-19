const express = require('express');

/* models 모듈에서 User 모델을 호출하여 User 로 선언 */
var User = require('../models').User;

const router = express.Router();

/* post 방식으로 호출된 router를 처리 */
router.post('/', function (req, res, next) {

  if (!req.body.login_id) {
    res.json(JSON.stringify("아이디를 입력하세요"));
  } else if (!req.body.login_pw) {
    res.json(JSON.stringify("비밀번호를 입력하세요"));
  } else {
    /* User 테이블의 데이터를 가져오는 SQL문 */
    User.findAll({

      /* db_email, db_id, db_name, db_pw, db_birth, db_image 값을 가져옴 */
      attributes: ['db_email', 'db_id', 'db_name', 'db_pw', 'db_birth', 'db_image'],

      /* 조건과 값이 일치하는 경우 */
      where: {
        db_id: req.body.login_id,
        db_pw: req.body.login_pw
      }
    })
      /* 조회 성공시 */
      .then((result) => {
        console.log("result : " + JSON.stringify(result));

        let DB2 = JSON.stringify(result);
        let DB1 = JSON.parse(DB2);
        let DB = DB1[0];
        if (DB) {
          req.session.login = true;

          /* DB의 키 값이 존재하지 않을때 까지 반복 */
          for (key in DB) {
            if (key === "db_name") {
              console.log("db_name : " + DB[key]);
              req.session.name = DB[key];
            } else if (key === "db_image") {

              console.log("db_image : " + DB[key]);
              req.session.image = DB[key];
            }
            else if (key === "db_email") {

              console.log("db_email : " + DB[key]);
              req.session.email = DB[key];
            }
            else if (key === "db_id") {

              console.log("db_id : " + DB[key]);
              req.session.lid = DB[key];
            }
            else if (key === "db_pw") {

              console.log("db_pw : " + DB[key]);
              req.session.pw = DB[key];
            }
            else if (key === "db_birth") {

              console.log("db_birth : " + DB[key]);
              req.session.birth = DB[key];
            }
          }
          res.json(JSON.stringify("로그인되었습니다."));
        } else {
          res.json(JSON.stringify("등록되지않은 사용자 이거나 비밀번호가 틀렸습니다."));
        }

      })
      /* 조회 실패시 */
      .catch((err) => {
        console.error("err : " + err);
        next(err);
      });
  }
});

module.exports = router;